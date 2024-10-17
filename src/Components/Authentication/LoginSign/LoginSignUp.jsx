import React, { useState } from "react";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";

const LoginSignUp = () => {
  const [activeTab, setActiveTab] = useState("tabButton1");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="loginSignUpSection">
        <div className="loginSignUpContainer">
          <div className="loginSignUpTabs">
            <p
              onClick={() => handleTab("tabButton1")}
              className={activeTab === "tabButton1" ? "active" : ""}
            >
              Login
            </p>
            <p
              onClick={() => handleTab("tabButton2")}
              className={activeTab === "tabButton2" ? "active" : ""}
            >
              Registrati
            </p>
          </div>
          <div className="loginSignUpTabsContent">
            {/* */}

            {activeTab === "tabButton1" && (
              <div className="loginSignUpTabsContentLogin">
                <form>
                  <input type="email" placeholder="Indirizzo e-mail *" required />
                  <input type="password" placeholder="Password *" required />
                  <div className="loginSignUpForgetPass">
                    <label>
                      <input type="checkbox" className="brandRadio" />
                      <p>Ricordami</p>
                    </label>
                    <p>
                      <Link to="/resetPassword">Password dimenticata?</Link>
                    </p>
                  </div>
                  <button>Accedi</button>
                </form>
                <div className="loginSignUpTabsContentLoginText">
                  <p>
                    Non Hai Ancora un Account?{" "}
                    <span onClick={() => handleTab("tabButton2")}>
                      Crea Account
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Tab2 */}

            {activeTab === "tabButton2" && (
              <div className="loginSignUpTabsContentRegister">
                <form>
                  <input type="text" placeholder="Nome utente *" required />
                  <input type="email" placeholder="Indirizzo e-mail *" required />
                  <input type="password" placeholder="Password *" required />
                  <p>
                  I tuoi dati personali saranno utilizzati per supportare la tua esperienza
                    in questo sito web, per gestire l'accesso al tuo account,
                    e per gli altri scopi descritti nella nostra
                    <Link
                      to="/terms"
                      style={{ textDecoration: "none", color: "#c32929" }}
                    >
                      {" "}
                      informativa sulla privacy
                    </Link>
                    .
                  </p>
                  <button>Registrati</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
