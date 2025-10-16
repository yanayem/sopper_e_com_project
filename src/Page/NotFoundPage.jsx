import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
      {/* 404 Text */}
      <h1 className="text-[8rem] sm:text-[10rem] font-extrabold text-blue-700 drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-3">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-700 text-white text-lg rounded-lg font-medium shadow-md hover:bg-blue-800 transition duration-300"
      >
        Go Back Home
      </button>

      {/* Optional small illustration */}
      <div className="mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </div>
    </section>
  );
};

export default NotFound;
