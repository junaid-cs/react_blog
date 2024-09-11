import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Initially set to false

  useEffect(() => {
    // This effect runs when the dark mode state changes
    if (isDarkMode) {
      // If dark mode is enabled, dynamically load the dark.css file
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/css/dark.css'; // Path to your darktheme.css in the public folder
      link.id = 'dark-theme'; // Set an ID for easy removal
      document.head.appendChild(link);
    } else {
      // If dark mode is disabled, remove the dark.css file if it exists
      const link = document.getElementById('dark-theme');
      if (link) {
        link.remove();
      }
    }
  }, [isDarkMode]); // This useEffect depends on isDarkMode

  // The onChange event directly toggles the dark mode state
  return (
    <div>
      <label className="switch yes">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setIsDarkMode((prev) => !prev)} // Toggle dark mode without the extra function
        />
        <span className="slider-color-mode onff" />
      </label>
    </div>
  );
};

export default DarkModeToggle;
