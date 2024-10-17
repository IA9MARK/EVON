import React from "react";

import "./ResetPass.css";
import { Link } from "react-router-dom";

const ResetPass = () => {
  return (
    <div>
      <div className="resetPasswordSection">
        <h2>Cambia la tua password</h2>
        <div className="resetPasswordContainer">
          <p> Ti invieremo un'e-mail per reimpostare la password</p>
          <form>
            <input type="email" placeholder="Indirizzo e-mail *" required />
            <button type="submit">Invia</button>
          </form>
        </div>
        <p>
          Torna a{" "}
          <Link to="/loginSignUp">
            <span>Accedi</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPass;
