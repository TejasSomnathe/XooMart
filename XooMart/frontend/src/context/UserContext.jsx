import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

// Utility function to get item from localStorage with fallback
const getLocalStorage = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  if (!stored || stored === "undefined" || stored === "null") return defaultValue;
  try {
    return JSON.parse(stored);
  } catch {
    return defaultValue;
  }
};

export function UserProvider({ children }) {
  // Initialize from localStorage
  const [user, setUser] = useState(() => getLocalStorage("user", null));
  const [isLoggedIn, setIsLoggedIn] = useState(() => getLocalStorage("isLoggedIn", false));

  // Update localStorage when `user` changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // Update localStorage when `isLoggedIn` changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
