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
                    Слово Qand - в переводе
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    с узбекского означает "конфета".
                  </div>
                </div>
              </h1>
              <p>
                Почему именно Qand? <br /> Хотелось чтобы название было простым,
                лаконичным и в тоже время, отражающим колорит нашей Родины. Qand
                был запущен в 2019 году, молодым предпринимателем (Вахобовым
                Саидакмалем). Идея создания авторского кондитерского
                производства зародилась двумя годами ранее и до полноценного
                запуска проекта потребовалось пройти несколько процессов
                подготовки. После долгих исследований, ошибок и наработок, было
                составлено меню, в которое вошли двадцать два вида великолепных
                по вкусу шоколадных конфет в стильных упаковках, среди которых:
                Ruby Pistachios — уникальные конфеты из натурального розового
                шоколада редкого четвертого вида с начинкой из отборных орехов
                фисташки; Salted Almond — сочетание шоколада и миндаля с
                гималайской солью Охлаждающий dessert Qand из молочного шоколада
                с начинкой на основе натуральных сливок и творога с добавлением
                ягод сочной клубники, киш-миша, орехов пекан и фисташки. Qand не
                перестает искать новые вкусовые сочетания, используя для этого
                только натуральные ингредиенты: экзотические фрукты, ягоды и
                отборные сухофрукты. Мы не останавливаемся на достигнутом и с
                каждым днем стараемся расширять нашу коллекцию кондитерских
                шедевров.
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
