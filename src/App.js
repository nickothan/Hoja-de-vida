import "./App.css";

import DatosBasicos from "./componentes/DatosBasicos";
import Resumen from "./componentes/Resumen";
import SistemasOperativos from "./componentes/SistemasOperativos";
import Educacion from "./componentes/Educacion";
import Habilidades from "./componentes/Habilidades";
import Footer from "./componentes/Footer";

function App() {
    return (
        <div className="App">
            <div className="container">
                <DatosBasicos />
                <div className="rejilla">
                    <div className="ladoIzq">
                        <Resumen />
                        <SistemasOperativos />
                    </div>
                    <div className="ladoDer">
                        <Educacion />
                        <Habilidades />
                    </div>
                </div>
                <Footer />
                <div className="contenido"></div>
            </div>
        </div>
    );
}

export default App;
