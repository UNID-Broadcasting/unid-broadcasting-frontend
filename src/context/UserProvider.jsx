import { useState, useCallback } from "react";
import { UserContext } from "./UserContext";
import { verifyTokenService } from "../services/userServices";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: null,
    uid: null,
    authStatus: false,
    role: null,
    isLoadingData: true,
  });

  /* Función que recibe el login */
  const login = (data) => {
    try {
      if (data.ok === true) {
        setUser({
          username: data.data.username,
          uid: data.data.id,
          authStatus: true,
          role: data.data.role,
          isLoadingData: false,
        });
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
      authStatus: false,
      role: null,
      isLoadingData: false,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
            role: response.data.role,
            isLoadingData: false,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <UserContext.Provider value={{ login, logout, user, verifyingToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
