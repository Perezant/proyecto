import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div id="Inicio" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          "Preservemos el medio ambiente para un futuro sostenible."
          </h1>
          <p className="primary-text">
          Proteger nuestro entorno natural es crucial para garantizar la calidad de vida de las generaciones futuras.
           Cada acción que tomamos hoy, ya sea pequeña o grande, tiene un impacto significativo en el medio ambiente
          </p>
          <button className="secondary-button">
            <a  target="_blank" href="https://www.bbva.com/es/sostenibilidad/que-es-el-medioambiente-y-por-que-es-clave-para-la-vida/">Ver Mas...</a> <FiArrowRight />{""}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
