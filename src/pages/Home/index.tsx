import React from "react";
// @ts-ignore
import Typical from "react-typical";

import { Accordion } from "../../components/Accordion";
import TelegramIcon from "../../assets/telegram-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";

import "./styles.css";

export function Home() {
  return (
    <div className="content-home">
      <div className="container-home">
        <section className="section-home">
          <h1>Devas|</h1>
          <div className="section-home-content">
            <h2>É difícil começar a </h2>
            <Typical
              steps={[
                " estudar programação.",
                4000,
                " focar nos estudos.",
                4000,
                " achar bons conteúdos.",
                4000,
              ]}
              loop={Infinity}
              wrapper="h2"
            />
            <h3>
              Para te ajudar, criamos trilhas com conteúdos selecionados para te ajudar na
              sua jornada de se tornar uma pessoa desenvolvedora. 
              <br/><br/>
              Nela você irá encontrar referências de conteúdos que auxiliarão nos seus estudos (links de cursos/artigos/documentações).
            </h3>
            <div className="section-home-social">
          <a href="https://t.me/d3vas/" target={"_blank"}>
          <img src={TelegramIcon} />
              </a>
              <a href="https://www.instagram.com/devas.tecnologia/" target={"_blank"}>
              <img src={InstagramIcon} />
              </a>
            </div>
          </div>
        </section>
        <Accordion />
      </div>
    </div>
  );
}
