import React, { useState, useEffect } from "react";
import "../styles/Cookies.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    const confirmAccept = window.confirm("¿Estás seguro de aceptar las cookies? 🍪");
    if (confirmAccept) {
      localStorage.setItem("cookiesAccepted", "true");
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        🍪 Augusto te quiere chorear las cookies para mejorar tu experiencia en el sitio.  
      </p>
      <p className="cookie-text">  
        Al continuar navegando aceptás nuestra política.
      </p>
      <div className="cookie-buttons">
        <button className="cookie-btn" onClick={handleAccept}>
          Aceptar
        </button>
        <button className="cookie-btn" onClick={handleAccept}>
          Aceptar
        </button>
      </div>
    </div>
  );
}

