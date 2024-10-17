import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <>
      <div className="contactSection">
        <h2>Vienici a Trovare</h2>
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.9399957320175!2d7.646933076028432!3d45.01829957136965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886c7f5b8589a9%3A0xdfa17c5e707a6d0b!2sCorso%20Unione%20Sovietica%2C%20355%2C%2010127%20Torino%20TO%2C%20Italy!5e0!3m2!1sen!2sit!4v1708798998751!5m2!1sen!2sit"
            width="800"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="evonmap"
          ></iframe>
        </div>
        <div className="contactInfo">
          <div className="contactAddress">
            <div className="address">
              <h3>Negozio in Italia</h3>
              <p>
              Corso Unione Sovietica 355, Torino
                <br /> Italia
              </p>
              <p>
                AdminIT@evon.com
                <br />
                +39 011 23 4567
              </p>
            </div>
            <div className="address">
              <h3>Negozio in Germania </h3>
              <p>
                Marktplatz 5, 37255 Eschwege Hessen,
                <br /> Germania
              </p>
              <p>
                AdminDE@evon.com
                <br />
                +45 333 221531212
              </p>
            </div>
          </div>
          <div className="contactForm">
            <h3>Contattaci</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Nome*"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Inserisci Email *"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows={10}
                cols={40}
                placeholder="Scrivi qui il tuo messaggio"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button type="submit">Invia</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
