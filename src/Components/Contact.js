import React from "react";
import "../App.css"; // Importa el archivo CSS para aplicar estilos
import forestImage from "../Assets/image7.jpg";
import pollutionImage from "../Assets/image8.jpg";
import recycleImage from "../Assets/image9.jpg";
import educationImage from "../Assets/image10.jpg";

const EnvironmentInfo = () => {
  return (
    <center><div id="Contacto" className="environment-info-container" style={{ marginTop: "200px" }}>
      <h2>Información sobre el Medio Ambiente</h2>
      <div className="info-item">
        <img src={forestImage} alt="Bosque" className="info-image" />
        <div className="info-text">
          <h3>Conservación del Ecosistema</h3>
          <p>Los ecosistemas proporcionan servicios vitales, como la purificación del aire y del agua, la regulación del clima y la polinización de cultivos. Preservar la biodiversidad y los hábitats naturales es esencial para mantener estos servicios.</p>
        </div>
      </div>
      <div className="info-item">
        <img src={pollutionImage} alt="Contaminación" className="info-image" />
        <div className="info-text">
          <h3>Impacto de las Actividades Humanas</h3>
          <p>La deforestación, la contaminación del aire y del agua, y el cambio climático son algunos de los principales desafíos ambientales causados por las actividades humanas. Estos problemas amenazan la estabilidad de los ecosistemas y la salud humana.</p>
        </div>
      </div>
      <div className="info-item">
        <img src={recycleImage} alt="Reciclaje" className="info-image" />
        <div className="info-text">
          <h3>Acciones para la Sostenibilidad</h3>
          <p>Cada individuo puede contribuir a la protección del medio ambiente mediante acciones cotidianas, como reducir el consumo de energía, reciclar, utilizar medios de transporte sostenibles y apoyar iniciativas de conservación.</p>
        </div>
      </div>
      <div className="info-item">
        <img src={educationImage} alt="Educación" className="info-image" />
        <div className="info-text">
          <h3>Educación y Concienciación</h3>
          <p>La educación ambiental es fundamental para promover la comprensión y la acción en favor del medio ambiente. Fomentar la conciencia sobre los problemas ambientales y las soluciones disponibles es crucial para crear un futuro sostenible.</p>
        </div>
      </div>
      <div className="contact-button-container">
      <a href="http://localhost:4000/"><button className="contact-button">¡Contáctanos!</button></a>
    </div>
    </div></center>
  );
};

export default EnvironmentInfo;

