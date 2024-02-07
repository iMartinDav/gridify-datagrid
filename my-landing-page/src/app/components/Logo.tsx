// components/Logo.tsx
"use client" // This makes the component a Client Component
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive"; // A custom hook to detect the screen size

const Logo: React.FC = () => {
  // Use the useMediaQuery hook to check if the screen is smaller than 768px
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Adjust the width and height of the logo image based on the screen size
  const logoWidth = isMobile ? 80 : 120;
  const logoHeight = isMobile ? 27 : 40;

  return (
    <div className="logo">
      <Image
        src="/logo.png"
        alt="Logo"
        width={logoWidth}
        height={logoHeight}
        quality={100} // Increase the quality of the image
        priority // Give the image priority loading
      />
    </div>
  );
};

export default Logo;
