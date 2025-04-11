import React, { createContext, useState } from 'react';

export const scrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollParams, setScrollParams] = useState({
    targetId: null,
    behavior: 'smooth', // Default behavior
    duration: 500, // Default duration in milliseconds
  });

  const value = {
    scrollParams,
    setScrollParams,
  };

  return <scrollContext.Provider value={value}>{children}</scrollContext.Provider>;
};