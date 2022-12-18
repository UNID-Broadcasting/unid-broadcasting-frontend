import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const WelcomeBanner = () => {
  const [greeting, setGreeting] = useState("");
  const { userName } = useContext(UserContext);

  const getGreeting = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 5) {
      setGreeting("Buenas madrugadas 🌃");
    } else if (hours < 12) {
      setGreeting("Buenos días 🌅");
    } else if (hours >= 12 && hours <= 18) {
      setGreeting("Buenas tardes 🌤️");
    } else {
      setGreeting("Buenas noches 🌙");
    }
  };

  useEffect(() => {
    getGreeting();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold">{greeting}</h1>
        <h1 className="text-2xl font-bold">{userName}</h1>
      </div>
    </>
  );
};

export default WelcomeBanner;
