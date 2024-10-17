import React from "react";
import "./Services.css";

import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="serviceBox">
          <FaCartFlatbedSuitcase size={50} style={{ marginBottom: "20px" }} />
          <h3>Consegna Veloce e Gratuita</h3>
          <p>Consegna gratuita per tutti gli ordini superiori a € 140</p>
        </div>
        <div className="serviceBox">
          <TfiHeadphoneAlt size={50} style={{ marginBottom: "20px" }} />
          <h3>24/7 Servizio Clienti</h3>
          <p>Assistenza clienti 24 ore su 24, 7 giorni su 7</p>
        </div>
        <div className="serviceBox">
          <RiShieldCheckLine size={50} style={{ marginBottom: "20px" }} />
          <h3>Garanzia di rimborso</h3>
          <p>Rimborsi entro 30 giorni</p>
        </div>
      </div>
    </>
  );
};

export default Services;
