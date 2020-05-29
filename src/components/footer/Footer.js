import React from "react";
import "./Footer.scss";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer" id="contact">
      <div className="footer-grid">
        <div className="contact-info">
          <div>
            <FaPhone />
            <p>(90) 925-63-93</p>
          </div>
          <div>
            <FaEnvelope />
            <p>info@qand.uz</p>
          </div>
          <div>
            <FaMapMarkerAlt />
            <p> Юнусабад, 34</p>
          </div>
        </div>
        <div className="social-media">
          <a
            href="https://www.facebook.com/qandchoco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/qandchoco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <p className="copyright"> &copy; 2020, "Qand"</p>
    </section>
  );
};

export default Footer;