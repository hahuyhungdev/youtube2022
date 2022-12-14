import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [listUser, setListUser] = useState([
    {
      id: 2,
      name: "huyhung",
      profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      password: "123",
    },
    {
      id: 3,
      name: "huyhung2",
      profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      password: "123",
    },
  ]);
  // login, logout, register

  // handle login, find user in listUser, if found, set currentUser
  const login = (name, password) => {
    const user = listUser.find((user) => user.name === name && user.password === password);
    if (user) {
      setCurrentUser(user);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>;
};
