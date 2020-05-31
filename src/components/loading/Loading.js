import React from "react";
import loading from "../../img/loading.gif";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="Данные загружаются" />
    </div>
  );
};

export default Loading;
