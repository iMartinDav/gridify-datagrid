// components/DarkLightModeSwitch.tsx

// Mark this file as a client component
'use client';

// Import necessary libraries
import React, { useState, useEffect, createContext, useContext } from 'react';

// Define a type for toggleDarkMode function
type ToggleDarkMode = () => void;

// Define a type for DarkModeContext value
interface DarkModeContextValue {
  isDarkMode: boolean;
  toggleDarkMode: ToggleDarkMode;
}

// Custom hook to manage dark mode state and effects
const useDarkMode = (): [boolean, ToggleDarkMode] => {
  // Initialize dark mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Function to toggle dark mode
  const toggleDarkMode: ToggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save mode in local storage
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    // Check for dark mode preference in local storage on component mount
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      try {
        setIsDarkMode(JSON.parse(savedDarkMode));
      } catch (error) {
        console.error('Error parsing dark mode preference:', error);
      }
    } else {
      // If no preference found, set dark mode based on user's OS preference
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
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

  return [isDarkMode, toggleDarkMode];
};

// Context to provide dark mode to child components
const DarkModeContext = createContext<DarkModeContextValue | undefined>(undefined);

// Provider component to wrap the app with the context
export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  // Provide dark mode and toggle function to children
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to consume the dark mode context
export const useDarkModeContext = (): DarkModeContextValue => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkModeContext must be used within a DarkModeProvider');
  }
  return context;
};

// Component to render the dark mode toggle switch
const DarkLightModeSwitch: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  const handleToggleDarkMode = () => {
    toggleDarkMode(); // Toggle dark mode when button is clicked
  };

  return (
    <div className="flex justify-end px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-6">
      <div className="dark-light-mode-switch">
        <button
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          role="switch"
          aria-checked={isDarkMode}
          className={`w-8 sm:w-10 md:w-12 lg:w-13 xl:w-14 2xl:w-16 h-5 sm:h-6 md:h-7 lg:h-7 xl:h-8 2xl:h-8 rounded-full flex items-center transition duration-300 focus:outline-none shadow-lg hover:bg-gray-200 active:bg-gray-300 ${
            isDarkMode ? 'bg-indigo-950' : 'bg-white'
          }`}
          onClick={handleToggleDarkMode} // Toggle dark mode when button is clicked
        >
          <div
            id="switch-toggle"
            className={`w-6 sm:w-6 md:w-7 lg:w-8 xl:w-9 2xl:w-9.5 h-5 sm:h-6 md:h-7 lg:h-7 xl:h-8 2xl:h-8 relative rounded-full transition duration-500 transform p-1 text-yellow-200 shadow-lg ${
              isDarkMode ? 'bg-violet-950 translate-x-full' : 'bg-violet-300 -translate-x-2'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="1 2 26 26"
              stroke="currentColor"
              className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 2xl:w-8 h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 2xl:h-8 m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d={
                  isDarkMode
                    ? 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    : 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                }
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DarkLightModeSwitch;
