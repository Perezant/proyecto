import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          
          <span>Ayuda</span>
          <span>Inicio</span>
          <span>Acerca de</span>
          <span>Galeria</span>
          <span>Clasificacion</span>
        </div>
        <div className="footer-section-columns">
          <span>9611910875</span>
          <span>Willian Leonardo</span>
          <span>Jodai Meza</span>
 
        </div>
        <div className="footer-section-columns">
          <span>Terminos y Condiciones</span>
          <span>Politica de Privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
