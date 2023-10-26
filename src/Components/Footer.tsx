import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-1/2 md:w-1/4 text-center sm:text-left">
          <p>&copy; Weather App </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 text-center sm:text-right mt-2 sm:mt-0">
          <a href="https://www.linkedin.com/in/kaannbass" className="hover:underline">Linkedin</a>
          <span className="mx-2">|</span>
          <a href="https://github.com/kaannbass" className="hover:underline">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
