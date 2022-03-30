

import DatosBasicos from "./componentes/DatosBasicos"
import Resumen from "./componentes/Resumen"
import Experiencia from "./componentes/Experiencia"
import ExpLaboral from "./componentes/ExpLaboral"
import Educacion from "./componentes/Educacion"
import Proyectos from "./componentes/Proyectos"
import Articulos from "./componentes/Articulos"
import Footer from "./componentes/Footer"
import Log from "./componentes/Log"




function App() {
  return (
    <AppContainer>
      <Log />
      <div className="container">
        <DatosBasicos />
        <div className='rejilla'>
          <div className='ladoIzq'>
            <Resumen />
            <ExpLaboral />
            <Educacion />
          </div>
          <div className='ladoDer'>
            <Proyectos />
            <Experiencia />
          </div>
        </div>
        <Articulos />
        <Footer />
        <div className='contenido'></div>
      </div>
    </AppContainer>
  )
}

export default App
