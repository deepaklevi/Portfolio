import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaHome } from "react-icons/fa";
import "./Lastpage.css";

const Lastpage = () => {
  return (
    <div className="contact-page">
      <h1 className="heading">Let's Work Together</h1>

      <div className="contact-content">
        {/* Contact Details Section */}
        <div className="contact-details">
          <div className="contact-grid">
            <div className="contact-item">
              <FaPhone className="icon" />
              <p>+91 9354198784</p>
            </div>

            <div className="contact-item">
              <FaEnvelope className="icon" />
              <p>kumardeepakmahto2121@gmail.com</p>
            </div>

            <div className="contact-item">
              <FaLinkedin className="icon" />
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="contact-item">
              <FaHome className="icon" />
              <p>Yusufpur Chak Saberi, Greator Noida(west), UP</p>
            </div>
          </div>
        </div>

        {/* WhatsApp QR Code Section */}
        <div className="whatsapp-qr">
          <img
            
  src={`${import.meta.env.BASE_URL}images/qrcode.png`}
  alt="Scan this QR code to WhatsApp me"
  className="qr-image"
/>

            alt="Scan this QR code to WhatsApp me"
            className="qr-image"
          />
          <button className="whatsapp-button">WhatsApp Me</button>
        </div>
      </div>
    </div>
  );
};

export default Lastpage;
