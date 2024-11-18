import React from 'react';
import { UserCircle } from 'lucide-react';

interface DetailProps {
  user: {
    email: string;
  };
}

const Detail: React.FC<DetailProps> = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-10 text-center">
            <UserCircle className="w-24 h-24 text-white mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white">User Profile</h1>
          </div>
          
          <div className="p-8">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Account Information</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Email Address</p>
                    <p className="text-lg text-gray-800">{user.email}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Account Status</p>
                    <p className="text-lg text-gray-800">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Edit Profile
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;