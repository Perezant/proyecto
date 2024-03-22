import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="Acerca" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Acerca de..</p>
        <h1 className="primary-heading">
        Comprometidos con el Medio Ambiente: Nuestra Misión Verde
        </h1>
        <p className="primary-text">
        En nombre de los Estudiantes de Sistemas Computacionales estamos comprometidos con la protección 
        y preservación del medio ambiente. Nos esforzamos por reducir nuestro
         impacto ecológico en cada paso de nuestra operación, desde la selección
          de materiales sostenibles hasta la implementación de prácticas de reciclaje 
          y conservación de energía. Creemos firmemente que cuidar nuestro entorno natural
         es una responsabilidad compartida y estamos dedicados a contribuir a un futuro más 
         verde y saludable para todos.
        </p>
        <div className="about-buttons-container">
          <a target="_blank" href="https://www.gob.mx/semarnat/articulos/el-cuidado-del-medio-ambiente-es-tarea-de-todos"><button className="secondary-button">Leer mas..</button></a>
          <button className="watch-video-button">
           <a target="_blank" href="https://www.youtube.com/watch?v=8yo99_T4QZI"> <BsFillPlayCircleFill /> Mirar video</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
