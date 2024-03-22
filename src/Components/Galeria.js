import React from "react";
import Image1 from "../Assets/image1.jpg";
import Image2 from "../Assets/image2.jpg";
import Image3 from "../Assets/image3.jpg";
import Image4 from "../Assets/image4.jpg";
import Image5 from "../Assets/image5.jpg";
import Image6 from "../Assets/image6.jpg";

import "../App.css"; // Importa el archivo CSS para aplicar estilos

const Gallery = () => {
  // Array de imágenes para la galería
  const images = [Image1, Image2, Image3,Image4,Image5,Image6];

  return (
    <div id="Galeria" className="gallery-section-wrapper" style={{ marginTop: "200px" }}> {/* Agrega margen superior */}
      <div className="gallery-section-top">
       <center> <p className="primary-subheading">Galería de Imágenes</p> </center>
        <center><h1 className="primary-heading">Explora nuestra galería</h1> </center>
       <center> <p className="primary-text">
          Disfruta de una selección de imágenes que capturan la belleza de la naturaleza.
        </p></center>
      </div>
      
      <div className="gallery-images-container">
        {/* Mapeamos sobre el array de imágenes para mostrar cada una */}
        {images.map((image, index) => (
          <div key={index} className="gallery-image-item">
            <img src={image} alt={"Image " + (index + 1)} className="gallery-image" />
            <div className="image-overlay">
              <p className="image-text">"Preservemos hoy para un mañana lleno de vida y belleza." {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Gallery;
