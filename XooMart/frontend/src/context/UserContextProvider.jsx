import React from "react";
import UserContext from "./UserContext.js";

const UserContextProvider = ({ children }) => {
  // Load from localStorage on first render
  const [user, setUser] = React.useState(() => {
    const stored = localStorage.getItem("user");
    if (!stored || stored === "undefined" || stored === "null") return null;
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  });

  const [loggedIn, setLoggedIn] = React.useState(() => {
    const stored = localStorage.getItem("loggedIn");
    return stored === "true";
  });

  // Save to localStorage when user or loggedIn changes
  React.useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("loggedIn", "true");
    } else {
      localStorage.removeItem("user");
      localStorage.setItem("loggedIn", "false");
    }
  }, [user, loggedIn]);

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;