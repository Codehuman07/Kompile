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
      firstName: "",
      lastName: "",
      bio: "",
      country: "",
      techStack: "",
      college: "",
      degree: "",
      branch: "",
      graduationYear: "",
      avatar: "",
      platform_data: {
        github: { username: "" },
        leetcode: { username: "" },
      },
    };
  });

  useEffect(() => {
    localStorage.setItem("kompile_user", JSON.stringify(user));
  }, [user]);

  const login = (data) => {
    setUser((prev) => ({
      ...prev,
      name: data.name || prev.name,
      email: data.email || prev.email,
      password: data.password || prev.password,
      platform_data: {
        ...prev.platform_data,
        ...(data.platform_data || {}),
      },
    }));
  };

  const logout = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      bio: "",
      country: "",
      techStack: "",
      college: "",
      degree: "",
      branch: "",
      graduationYear: "",
      avatar: "",
      platform_data: {
        github: { username: "" },
        leetcode: { username: "" },
      },
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
