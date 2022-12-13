import React from "react";
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#222036" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px", height: "40px" }}
      expires={150}
    >
      Este sitio web utiliza cookies para asegurar que obtenga la mejor
      experiencia en nuestro sitio web.
    </CookieConsent>
  );
};

export default Cookies;
