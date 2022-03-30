import { ExperienciaContent, LinkContainer } from "./styles.js";

import { ReactComponent as LinkIcon } from "../assets/link.svg";

export default function Proyectos() {
  const experiencias = [
    {
      title: "Tic-Tac-Toe",
      desctipcion:
        "Tic-tac-toe is a game builded with react.js where two players can play using X and O, each turn have to mark with the icon in the space on a 3 × 3 grid. The player who has three respective marks in a horizontal, vertical or diagonal line wins the game.",
      link: "https://tic-tac-toe-nico.netlify.app/",
    },
    {
      title: "To Do",
      desctipcion:
        "It is a simple and intuitive tool that allows you to quickly jot down tasks to complete later.",
      link: "https://master-to-do-list.netlify.app/",
    },
  ];

  function Institucion(e) {
    //console.log("Experinence: ", e);
    return (
      <li>
        <LinkContainer>
          <LinkIcon />
          <a target="_blank" rel="noreferrer" href={e.link}>
            <span>{e.title}</span>
          </a>
        </LinkContainer>
        <p>{e.desctipcion}</p>
      </li>
    );
  }
  return (
    <ExperienciaContent>
      <div className="tituloSO">
        <h2>Proyects</h2>
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
