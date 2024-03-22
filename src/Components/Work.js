import React from "react";
import "../App.css"; // Importa el archivo CSS para aplicar estilos
import imagen2 from "../Assets/imagen2.jpg";

const EnvironmentSection = () => {
  return (
    <section className="environment-section" style={{ backgroundImage: `url(${imagen2})`, backgroundSize: "cover", backgroundPosition: "center", marginTop: "200px", padding: "50px 0" }}>
      <div className="container">
        <div className="section-content">
          <div className="section-text">
            <h2 style={{ color: "#080808", textAlign: "center", marginBottom: "50px" }}>Comprometidos con el Medio Ambiente</h2>
            <p style={{ color: "#080808", textAlign: "center", fontSize: "18px" }}>
              En nuestra misión por preservar y proteger el medio ambiente, hemos adoptado diversas prácticas sostenibles en todas nuestras operaciones. Desde la elección de materiales ecológicos hasta la reducción de residuos y el fomento de la conciencia ambiental, estamos comprometidos con un futuro más verde.
            </p>
            <h3 style={{ color: "#080808", textAlign: "center", marginTop: "40px", marginBottom: "20px" }}>Clasificación de Residuos:</h3>
            <div className="waste-cards">
              <div className="card" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
                <h4>Residuos Orgánicos</h4>
                <p>
                  Los residuos orgánicos son aquellos materiales biodegradables como restos de comida, papel, cartón, etc. Estos materiales se descomponen naturalmente y pueden ser utilizados para compostaje.
                </p>
              </div>
              <div className="card" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
                <h4>Residuos Inorgánicos</h4>
                <p>
                  Los residuos inorgánicos son aquellos materiales no biodegradables como plásticos, metales, vidrios, etc. Es importante reciclar estos materiales para reducir la contaminación ambiental.
                </p>
              </div>
              <div className="card" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
                <h4>Residuos Reciclables</h4>
                <p>
                  Los residuos reciclables son aquellos materiales como papel, cartón, plástico, vidrio, etc., que pueden ser reciclados y reutilizados para reducir la cantidad de desechos enviados a los vertederos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;

