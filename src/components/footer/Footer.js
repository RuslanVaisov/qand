import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-grid">
        <div className="contact-info">
          <div>(90) 925-63-93</div>
          <div>info@qand.uz</div>
          <div>Юнусабад, 34</div>
        </div>
        <div className="social-media">
          <div>facebook</div>
          <div>instagram</div>
        </div>
      </div>
      <p className="copyright"> &copy; 2020, "Qand"</p>
    </section>
  );
};

export default Footer;
