// layout.tsx

// Import necessary libraries and components
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DarkModeProvider } from './components/Header/DarkLightModeSwitch';
import './globals.css';

// Define your font
const inter = Inter({ subsets: ['latin'] });

// Define your metadata
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// Define your layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Wrap your application with the DarkModeProvider
    <DarkModeProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </DarkModeProvider>
  );
}
