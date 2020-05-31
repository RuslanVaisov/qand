import React from "react";
import "../components/showcase/Showcase.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="showcase">
      <div className="showcase-content">
        <h1>404</h1>
        <p>Страница не найдена</p>
        <button>
          <Link to="/">На главную</Link>
        </button>
      </div>
    </section>
  );
};

export default Error;
