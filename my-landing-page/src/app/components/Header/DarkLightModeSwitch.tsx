// components/DarkLightModeSwitch.tsx

// Mark this file as a client component
"use client"

// Import necessary libraries
import React, { useState, useEffect, createContext, useContext } from "react";
import { Switch } from "@headlessui/react";

// Custom hook to manage dark mode state and effects
const useDarkMode = () => {
  // Initialize dark mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save mode in local storage
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    // Check for dark mode preference in local storage on component mount
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    } else {
      // If no preference found, set dark mode based on user's OS preference
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  // Set the data-theme attribute on the html element based on the user's preference
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode] as const;
};

// Context to provide dark mode to child components
const DarkModeContext = createContext(false);

// Provider component to wrap the app with the context
export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <DarkModeContext.Provider value={isDarkMode}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to consume the dark mode context
export const useDarkModeContext = () => {
  return useContext(DarkModeContext);
};

// Component to render the dark mode toggle switch
const DarkLightModeSwitch: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="dark-light-mode-switch">
      {/* Switch component from Tailwind UI */}
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className={`${
          isDarkMode ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          className={`${
            isDarkMode ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
    </div>
  );
};

export default DarkLightModeSwitch;
