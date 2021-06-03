import { ExperienciaContent } from "./styles.js";

// import data from "./Data.json";

export default function Experiencia() {
  return (
    <ExperienciaContent>
      <h2>Experiencia</h2>
      <br />

      <ul>
        <li>
          <span>HTML</span>
          <span>3 años</span>
        </li>
        <li>
          <span>CSS</span>
          <span>3 años</span>
        </li>
        <li>
          <span>SCSS</span>
          <span>2 años</span>
        </li>
        <li>
          <span>React</span>
          <span>1 año</span>
        </li>
        <li>
          <span>Redux</span>
          <span>1 año</span>
        </li>
        <li>
          <span>Git</span>
          <span>2 años</span>
        </li>
      </ul>

      {/*data.map(({ title, items }) => {
        return (
          <ul>
            <h5>{title}</h5>
            {items.map(({ item, time }) => {
              return (
                <li key={Math.random() * 10}>
                  <span>{item}</span>
                  <span>{` ${time} ${time === 1 ? "año" : "años"}`}</span>
                </li>
              );
            })}
          </ul>
        );
      })*/}
    </ExperienciaContent>
  );
}
