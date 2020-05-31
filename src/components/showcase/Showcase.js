import React from "react";
import "./Showcase.scss";
import scroll from "../../img/scroll.gif";

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="showcase-content">
        <h1>
          Generation of Premium <br /> Handmade Chocolate
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
      <img src={scroll} alt="scroll" />
    </section>
  );
};

export default Showcase;
