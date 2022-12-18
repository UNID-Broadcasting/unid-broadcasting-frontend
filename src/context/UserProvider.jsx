import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const username = localStorage.getItem("user");
    if (username) {
      setUserName(JSON.parse(username));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
