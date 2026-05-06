import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    platform_data: {
      github: "",
      leetcode: "",
      codeforces: "",
      gfg: "",
      hackerrank: "",
    },
  });

  const login = (data) => {
    setUser({
      name: data.name,
      email: data.email,
      password: data.password,
      platform_data: data.platform_data || {},
    });
  };

  const logout = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      platform_data: {},
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
