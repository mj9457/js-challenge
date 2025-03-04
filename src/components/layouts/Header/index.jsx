import React from "react";
import { Home } from "lucide-react";

const Header = () => {
  const goToHome = () => {
    window.location.href = "/";
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-center">
        <button
          onClick={goToHome}
          className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition-colors duration-300 focus:outline-none"
        >
          <Home className="w-6 h-6" />
          <span className="font-medium">홈으로</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
