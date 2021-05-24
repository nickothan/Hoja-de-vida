import "./styles.js";
import { Container, InstitucionContainer } from "./styles.js";

const data = {
  institucion: [
    {
      nombre: "Suramerica Educacion Superior",
      fecha: "2018",
      descripcion: "Entrenamiento en programación",
    },
    {
      nombre: "Uniminuto",
      fecha: "2017- 2019(aplazado)",
      descripcion: "tec. seg. redes y seg. informatica",
    },
  ],
};

function Institucion({ nombre, fecha, descripcion }) {
  return (
    <InstitucionContainer>
      <h3>{nombre}</h3>
      <p>{fecha}</p>
      <p>{descripcion}</p>
    </InstitucionContainer>
  );
}

export default function miEducacion() {
  return (
    <Container>
      <h2>Educacion</h2>
      <div className="instituciones">
        {data.institucion.map((institucion) => (
          <Institucion key={Math.random() * 10} {...institucion} />
        ))}
      </div>
    </Container>
  );
}
