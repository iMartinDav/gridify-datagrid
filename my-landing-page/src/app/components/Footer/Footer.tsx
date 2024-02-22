import React from "react";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-20 flex flex-col md:flex-row items-center justify-between bg-transparent px-8 py-4">
      <div className="flex items-center justify-center md:justify-start">
        <p className="text-center md:text-left text-sm">
          © {currentYear} Gridify. All rights reserved to GPT 4. Developed by iMartinDav with 💚.
        </p>
      </div>
      <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
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
