import { useState, useEffect, useCallback } from "react";
import { UserContext } from "./UserContext";
import { verifyTokenService } from "../services/userServices";

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState();
  const [user, setUser] = useState({
    username: null,
    uid: null,
    authStatus: false,
  });

  const getUserName = () => {
    const username = localStorage.getItem("user");
    if (username) {
      setUserName(JSON.parse(username));
    }
  };

  /* Función que recibe el login */
  const login = (data) => {
    try {
      console.log(data);
      if (data.ok === true) {
        setUser({
          username: data.data.username,
          uid: data.data.id,
          authStatus: true,
        });
        setUserName(data.data.username);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* Función que cierra sesión */
  const logout = () => {
    setUser({
      username: null,
      password: null,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserName(null);
  };

  /* Función que verifica nuestro token */
  const verifyingToken = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await verifyTokenService();
        if (response.ok === true) {
          setUser({
            username: response.data.username,
            uid: response.data.id,
            authStatus: true,
          });
          setUserName(response.data.username);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <UserContext.Provider
      value={{ userName, setUserName, login, logout, user, verifyingToken }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
