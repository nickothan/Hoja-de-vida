import DatosBasicos from "./componentes/DatosBasicos";
import Resumen from "./componentes/Resumen";
import Experiencia from "./componentes/Experiencia";
import Educacion from "./componentes/Educacion";
import Habilidades from "./componentes/Habilidades";
import Footer from "./componentes/Footer";

import { AppContainer } from "./styles.js";

function App() {
  return (
    <AppContainer>
      <div className="container">
        <DatosBasicos />
        <div className="rejilla">
          <div className="ladoIzq">
            <Resumen />
            <Experiencia />
          </div>
          <div className="ladoDer">
            <Educacion />
            <Habilidades />
          </div>
        </div>
        <Footer />
        <div className="contenido"></div>
      </div>
    </AppContainer>
  );
}

export default App;
