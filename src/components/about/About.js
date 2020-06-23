import React, { useEffect } from "react";
import "./About.scss";
import said from "../../img/said.png";
import rafinad from "../../img/rafinad.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".girl",
        scrub: 2,
        start: "top 100%",
        end: "top 80%",
      },
    });

    tl.from(".girl", 1.2, { y: "500", ease: "power3.easeOut" }, "Start")
      .from(".girl img", 2, { scale: 1.6, ease: "power3.easeOut" }, 0.2)
      .from(".boy", 1.2, { y: "500", ease: "power3.easeOut" }, 0.2)
      .from(".boy img", 2, { scale: 1.6, ease: "power3.easeOut" }, 0.2);

    // content animation
    tl.staggerFrom(
      ".hero-content-line-inner",
      1,
      { y: 44, ease: "power3.easeOut", delay: 0.8 },
      0.15,
      "Start"
    ).from(
      ".hero-content-inner p",
      1,
      {
        y: 20,
        opacity: 0,
        ease: "power3.easeOut",
      },
      1.4
    );
  }, []);

  return (
    <section className="about hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Qand - в переводе с узбекского
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    означает "конфета".
                  </div>
                </div>
              </h1>
              <p>
                Почему именно так назвали? <br />
                Хотели простое, национальное и запоминающееся название. Среди
                народа в последнее время начало пропадать истинное понятие слова
                "qand" понимая под этим названием сахар (рафинад).
                <br /> Идея создания кондитерского цеха пришла ещё в 2016 году,
                когда знакомая предложила начать это русло, но тема тогда была
                немного иная. В итоге летом 2017 года решили запустить. Нашли
                помещение, сделали соответствующий цеху ремонт, закупили
                оборудование. Специально не изучая (в надежде создания чего-то
                нового и особенного) сферу кондитерки, начали ставить
                эксперименты и пробовать разнообразные вкусы. И вот после долгих
                исследований, проб и ошибок создали меню из 22х видов конфет.
                <br />
                Наконец в апреле 2019 года мы запустились через социальные сети
                в тестовом режиме и наше меню расширяется по сей день.
              </p>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner">
              <div className="hero-image girl">
                <img src={rafinad} alt="lump sugar" />
              </div>
              <div className="hero-image boy">
                <img src={said} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
