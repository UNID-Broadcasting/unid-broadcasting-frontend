import React, { useState, useEffect } from "react";

const WelcomeBanner = () => {
  const [greeting, setGreeting] = useState("");

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
        <h1 className="text-2xl font-bold">Username</h1>
      </div>
    </>
  );
};

export default WelcomeBanner;
