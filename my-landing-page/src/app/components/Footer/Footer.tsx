import React from "react";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-20 flex items-center justify-between bg-transparent text-white px-8">
      <div className="flex items-center">
        <p className="text-sm">
          © {currentYear} Gridify. All rights reserved to GPT 4. Developed by iMartinDav whit 💚.
        </p>
      </div>
      <div className="flex items-center">
        <a
          href="YOUR_DISCORD_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-sm"
        >
          <FaDiscord />
          <span>Contact us on Discord</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
