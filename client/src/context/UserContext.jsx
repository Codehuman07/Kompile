import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("kompile_user");
    if (savedUser) {
      return JSON.parse(savedUser);
    }
    return {
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
    };
  });

  useEffect(() => {
    localStorage.setItem("kompile_user", JSON.stringify(user));
  }, [user]);

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
    localStorage.removeItem("kompile_user");
  };

  const updateBasicInfo = (info) => {
    setUser((prev) => ({
      ...prev,
      ...info,
    }));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        updateBasicInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
