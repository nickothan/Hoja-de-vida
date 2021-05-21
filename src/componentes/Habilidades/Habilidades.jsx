import { HabilidadesContent } from "./styles.js";

const habilidades = [
  {
    item: "HTML",
    time: 3,
  },
  {
    item: "CSS",
    time: 3,
  },
  {
    item: "JavaScript",
    time: 2,
  },
  {
    item: "React",
    time: 1,
  },
  {
    item: "Redux",
    time: 1,
  },
  {
    item: "JQery",
    time: 2,
  },
  {
    item: "Ajax",
    time: 2,
  },
  {
    item: "SO Unix",
    time: 3,
  },
];

export default function Habilidades() {
  return (
    <HabilidadesContent>
      <h2>Experiencia</h2>
      <br />
      <ul>
        {habilidades.map(({ item, time }) => {
          return (
            <li key={Math.random() * 10}>
              <span>{item}</span>
              <span>{` ${time} ${time === 1 ? "año" : "años"}`}</span>
            </li>
          );
        })}
      </ul>
    </HabilidadesContent>
  );
}
