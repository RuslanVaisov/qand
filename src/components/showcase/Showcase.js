import React from "react";
import "./Showcase.scss";
import scroll2 from "../../img/scroll2.gif";

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="showcase-content">
        <h1>
          <div className="line">
            <span>Generation of Premium</span>
          </div>
          <div className="line">
            <span> Handmade Chocolate</span>
          </div>
        </h1>
        <p>
          Профессионально значит лучший бельгийский <br /> шоколад и отборные
          сухофрукты Узбекистана.
        </p>
        <button>
          <a
            href="https://t.me/qandadmin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Заказать
          </a>
        </button>
      </div>
      <img src={scroll2} alt="scroll" />
      <div className="showcase-overlay"></div>
    </section>
  );
};

export default Showcase;
