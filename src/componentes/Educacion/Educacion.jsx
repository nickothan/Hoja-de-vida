import "./styles.js";
import {MiEducacion} from "./styles.js";

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

function Institucion({nombre, fecha, descripcion}) {
    return (
        <div className="institucion">
            <h3 className="nombreInstitucion">{nombre}</h3>
            <p className="fechaEducacion">{fecha}</p>
            <p className="descripcionEstudio">{descripcion}</p>
        </div>
    );
}

export default function miEducacion() {
    return (
        <MiEducacion>
            <h2>Educacion</h2>
            <div className="instituciones">
                {data.institucion.map((institucion) => (
                    <Institucion {...institucion} />
                ))}
            </div>
        </MiEducacion>
    );
}
