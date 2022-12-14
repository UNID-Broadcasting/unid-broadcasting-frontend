import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const WelcomeBanner = () => {
  const [greeting, setGreeting] = useState("");
  const { user } = useContext(UserContext);

  const getGreeting = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 5) {
      setGreeting("Buenas madrugadas ð");
    } else if (hours < 12) {
      setGreeting("Buenos dÃ­as ð");
    } else if (hours >= 12 && hours <= 18) {
      setGreeting("Buenas tardes ð¤ï¸");
    } else {
      setGreeting("Buenas noches ð");
    }
  };

  useEffect(() => {
    getGreeting();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          {greeting}, {user.username}.
        </h1>
      </div>
    </>
  );
};

export default WelcomeBanner;
