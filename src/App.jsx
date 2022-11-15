import "normalize.css"
import './App.css';
import About from "./componentes/About/About";
import Header from './componentes/Header/Header';
import Hero from "./componentes/Hero/Hero";
import Servicios from "./componentes/Servicios/Servicios";
import Info from "./componentes/Info/Info";
import Reseñas from "./componentes/Reseñas/Reseñas";
import Galeria from "./componentes/Galeria/Galeria";
import Contacto from "./componentes/Contacto/Contacto";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Servicios/>
      <Info/>
      <Reseñas/>
      <Galeria/>
      <Contacto/>
      <Footer/>
    </>
  );
}

export default App;
