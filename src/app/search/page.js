// pages/index.js
import React from "react";

const HomePage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center p-6 max-w-md bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Site Under Construction</h1>
        <p className="mt-4 text-gray-600">
          We're working hard to bring you an amazing experience. Please visit again soon!
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
