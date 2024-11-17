import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  profilePic: string;
}

const UserProfile: React.FC = () => {
  const { authToken, logout } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  useEffect(() => {
    if (authToken) {
      fetch("http://localhost:3000/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, [authToken]);

  if (!user) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="w-[70%] flex items-center justify-center">
      <div className="bg-white shadow-lg  rounded-lg  ">
        <div className="relative">
          <img
            src={user.profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h2 className="text-white text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-300">{user.username}</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src={user.profilePic || "https://via.placeholder.com/150"}
                alt="Profile Avatar"
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.username}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-700">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-black text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
