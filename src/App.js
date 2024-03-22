import "./App.css";
import Home from "./Components/Inicio";
import About from "./Components/Acerca";
import Work from "./Components/Work";
import Testimonial from "./Components/Galeria";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Gallery from "./Components/Galeria";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
