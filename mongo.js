import mongoose from "mongoose";

// MongoDB connection
mongoose.connect("mongodb+srv://Navadeep:Aneesh1@cluster0.rqf8j.mongodb.net/website?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log('failed');
  });

// User schema
const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // Ensure email is unique
  },
  password: {
    type: String,
    required: true
  },
  resetToken: String,
  resetTokenExpiry: Date
});

const collection = mongoose.model("User", newSchema); // Change to "User" for clarity

export default collection;
