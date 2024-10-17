import React from "react";
import { Link } from "react-router-dom";

import "./Error.css";

const Error = () => {
  return (
    <>
      <div className="errorContainer">
        <h1>OOPS!</h1>
        <h3>Pagina non trovata</h3>
        <p>
        Siamo spiacenti, non siamo riusciti a trovare la pagina che cercavi. Suggeriamo
        <br />
          di ritornare alla pagina iniziale.
        </p>
        <Link to="/">Vai indietro</Link>
      </div>
    </>
  );
};

export default Error;
