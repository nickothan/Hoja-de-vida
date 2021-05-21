import { ExperienciaContent } from "./styles.js";

export default function SistemasOperativos() {
  const experiencias = [
    {
      title: "Tic-Tac-Toe",
      desctipcion:
        "Juego tic-tac-toe elaborado en react.js  para dos jugadores, X y O, que toman turnos marcando los espacios en una cuadrícula de 3 × 3. El jugador que logre colocar tres marcas respectivas en una fila horizontal, vertical o diagonal gana el juego.",
      link: "https://tic-tac-toe-nico.netlify.app/",
    },
    {
      title: "To Do",
      desctipcion:
        "Es una herramienta sencilla e intuitiva que te permite apuntar rapidamente tareas para completarlas luego.",
      link: "https://master-to-do-list.netlify.app/",
    },
  ];

  function Institucion(e) {
    //console.log("Experinence: ", e);
    return (
      <li>
        <h4>{e.title}</h4>
        <p>{e.desctipcion}</p>
        <a href={e.link}>{e.link}</a>
      </li>
    );
  }
  return (
    <ExperienciaContent>
      <div className="tituloSO">
        <h2>Proyectos</h2>
      </div>
      <br />
      <ul>
        {experiencias.map((e) => {
          //console.log("e: ", e);
          return <Institucion key={Math.random() * 10} {...e} />;
        })}
      </ul>
    </ExperienciaContent>
  );
}
