import React, { useState } from "react";
import "./Popup.css";

import popupImg from "../../Assets/newsletter-popup.jpg";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 300);
  };

  return (
    showPopup && (
      <div className="popup-overlay">
        <div className={`popup-content ${fadeOut ? "fade-out" : ""}`}>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
          <div className="popup-left">
            <img src={popupImg} alt="Newsletter" />
          </div>
          <div className="popup-right">
            <h2>Iscriviti alla Newsletter</h2>
            <p>
            Sii il primo a ricevere le ultime notizie su tendenze, promozioni e
            molto di più!
            </p>
            <form>
              <input type="email" placeholder="Inserisci la tua mail" required />
              <button type="submit">Iscriviti</button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
