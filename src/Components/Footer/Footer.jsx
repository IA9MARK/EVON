import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import paymentIcon from "../../Assets/paymentIcon.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Iscrizione avvenuta con Successo!!!");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer_left">
            <div className="footer_logo_container">
              <img src={logo} alt="" Z />
            </div>

            <p>Corso Unione Sovietica 355, Torino ITALIA</p>

            <div className="footer_address">
              <strong> sale@evon.com </strong>
              <strong> +39 0141 22334455</strong>
            </div>

            <div className="social_links">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaPinterest />
            </div>
          </div>

          <div className="footer_content">
            <h5>L'Azienda</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/about">Chi Siamo</Link>
                </li>
                <li>
                  <Link to="/about">Carriera</Link>
                </li>
                <li>
                  <Link to="*">Affiliati</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contatti</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_content">
            <h5>Acquista</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/shop">Nuovi Arrivi</Link>
                </li>
                <li>
                  <Link to="/shop">Accessori</Link>
                </li>
                <li>
                  <Link to="/shop">Uomo</Link>
                </li>
                <li>
                  <Link to="/shop">Donna</Link>
                </li>
                <li>
                  <Link to="/shop">Acquista Tutto</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_content">
            <h5>Aiuto</h5>
            <div className="links_container">
              <ul onClick={scrollToTop}>
                <li>
                  <Link to="/contact">Servizio Clienti</Link>
                </li>
                <li>
                  <Link to="/loginSignUp">Il mio Account</Link>
                </li>
                <li>
                  <Link to="/contact">Cerca lo Store</Link>
                </li>
                <li>
                  <Link to="/terms">Privacy</Link>
                </li>
                <li>
                  <Link to="/contact">Contatti</Link>
                </li>
                <li>
                  <Link to="/">Carta regalo</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_right">
            <h5>Rimani Aggiornato</h5>
            <p>
           Sii il  primo a ricevere le ultime notizie su tendenze, promozioni e molto altro!


            </p>

            <form onSubmit={handleSubscribe}>
              <input type="email" placeholder="Il tuo Indirizzo Email" required />
              <button type="submit">Vai</button>
            </form>

            <h6>Pagamenti Sicuri</h6>
            <div className="paymentIconContainer">
              <img src={paymentIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>
            © 2024 EVON. All Rights Reserved | Made By  Aurelio Marco Giglia  with ❤️
          </p>
          <div className="footerLangCurrency">
            <div className="footerLang">
              <p>Lingue</p>
              <select name="language" id="language">
                <option value="Italian">Italiano</option>
                <option value="english">Inglese</option>
                <option value="Germany">Tedesco</option>
                <option value="French">Francese</option>
              </select>
            </div>
            <div className="footerCurrency">
              <p>Valuta:</p>
              <select name="currency" id="currency">
                <option value="EUR">€ EUR</option>
                <option value="INR">₹ INR</option>
                <option value="USD">$ USD</option>
                <option value="GBP">£ GBP</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
