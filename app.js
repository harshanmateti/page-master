import express from "express";
import collection from "./mongo.js";
import cors from "cors";
import bcrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'harshan.mateti@gmail.com', // Your Gmail address
    pass: 'advo bcov nrbr asma', // Your app password or Gmail password
  },
  tls: {
    rejectUnauthorized: false // Allow self-signed certificates (use cautiously)
  }
});

// Middleware to check authentication
const authenticateUser = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ status: "not-authenticated" });
  }

  try {
    const user = await collection.findOne({ resetToken: token });
    if (!user) {
      return res.status(401).json({ status: "not-authenticated" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

// Endpoint for checking if user is authenticated
app.get("/authenticated", authenticateUser, (req, res) => {
  res.json({ status: "authenticated", user: req.user.email });
});

// Endpoint for user login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user in the database
    const user = await collection.findOne({ email });

    if (!user) {
      return res.json({ status: "error", message: "User not found" });
    }

    // Validate the password using bcrypt
    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
      res.json({
        status: "authenticated",
        user: { email: user.email },
      });
    } else {
      res.json({ status: "error", message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error in login:", error);
    res.json({ status: "error", message: "Something went wrong. Please try again later." });
  }
});


// Endpoint for user signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.json({ status: "exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = {
      email,
      password: hashedPassword,
      resetToken: null,
      resetTokenExpiry: null
    };
    await collection.insertMany([data]);
    res.json({ status: "created" });
  } catch (e) {
    res.json({ status: "fail" });
  }
});

// Endpoint for forgotten password
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await collection.findOne({ email });
    if (!user) {
      return res.json({ status: "invalid-email" });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // Token valid for 1 hour

    await collection.updateOne(
      { email },
      { $set: { resetToken, resetTokenExpiry } }
    );

    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
    const mailOptions = {
      to: email,
      subject: 'Password Reset',
      text: `You requested a password reset. Click the link below to reset your password:\n\n${resetLink}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ status: "reset-link-sent" });
  } catch (e) {
    res.json({ status: "fail" });
  }
});

// Endpoint for resetting password
app.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await collection.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }
    });

    if (!user) {
      return res.json({ status: "invalid-token" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await collection.updateOne(
      { email: user.email },
      {
        $set: {
          password: hashedPassword,
          resetToken: null,
          resetTokenExpiry: null
        }
      }
    );

    res.json({ status: "password-reset-success" });
  } catch (e) {
    res.json({ status: "fail" });
  }
});

app.get('/relay/:id/:action', async (req, res) => {
  const { id, action } = req.params;

  const esp32URL =' http://192.168.236.207/${action}${id}';
  try {
      const response = await axios.get(esp32URL); // Send a request to ESP32
      res.send(response.data); // Forward ESP32's response to the client
  } catch (error) {
      res.status(500).send('Failed to communicate with ESP32');
  }
});

// Start the server
app.listen(8000, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log("Server is running on port 8000");
  }
});
