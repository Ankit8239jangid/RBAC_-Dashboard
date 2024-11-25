import React from "react";
import { Link} from "react-router-dom";

function WelcomePage() {
  

  return (

    <div className="h-screen bg-gradient-to-br from-purple-600 to-indigo-500  flex items-center justify-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.prod.website-files.com/6231812313e8661d7da3a4e7/62821563a7314a507fe75302_shutterstock_2062994906-768x328.jpeg"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to <span className="text-yellow-400">RBAC System</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Manage your users efficiently with Role-Based Access Control. Secure and flexible, built for modern teams.
        </p>
        <Link to={'/dashboard'}
          
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105"
        >
          Login
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4204/4204963.png"
          alt="Decorative Icon"
          className="w-20 h-20 opacity-70 animate-bounce"
        />
      </div>
      <div className="absolute top-10 right-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4204/4204673.png"
          alt="Decorative Icon"
          className="w-20 h-20 opacity-70 animate-spin-slow"
        />
      </div>
    </div>
  );
}

export default WelcomePage;
