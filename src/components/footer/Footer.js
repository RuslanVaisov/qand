import React from "react";
import "./Footer.scss";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../img/logo.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";

const Footer = () => {
  return (
    <section className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-logo">
          <img src={logo} style={{ width: "120px" }} alt="" />
        </div>
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
            <img src={facebook} style={{ width: "100px" }} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/qandchoco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} style={{ width: "100px" }} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p> &copy; 2020, "Qand"</p>
        <p>
          Дизайн и разработка студии
          <a
            href="http://www.aiso.uz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aiso
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
