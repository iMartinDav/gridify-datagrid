// components/Logo.tsx
'use client'; // This makes the component a Client Component
import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const Logo: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Define image sizes for different screen widths
  const imageSizes = isMobile ? '(max-width: 640px) 80px, 120px' : '120px';

  return (
    <header className="logo">
      <Image
        src="/logo.png"
        alt="Logo"
        width={isMobile ? 80 : 120}
        height={isMobile ? 27 : 40}
        quality={100}
        priority
        sizes={imageSizes}
        className="rounded-full object-contain" // Apply rounded corners and contain the image within its box
      />
    </header>
  );
};

export default Logo;
