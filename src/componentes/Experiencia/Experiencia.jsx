import { ExperienciaContent } from './styles.js'

// import data from "./Data.json";

export default function Experiencia() {
  return (
    <ExperienciaContent>
      <h2>Experiencia</h2>
      <br />
      <ul>
        <li>
          <div>
            <span>HTML</span>
            <span>3 años</span>
          </div>
        </li>
        <li>
          <div>
            <span>CSS</span>
            <span>3 años</span>
          </div>
          <ul>
            <li>
              <span>SCSS</span>
              <span>2 años</span>
            </li>
            <li>
              <span>Styled Components</span>
              <span>1 año</span>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <span>JavaScript</span>
            <span>3 años</span>
          </div>
          <ul>
            <li>
              <span>Jquery</span>
              <span>2 años</span>
            </li>
            <li>
              <span>React</span>
              <span>1 año</span>
            </li>
            <li>
              <span>TypeScript</span>
              <span>1 año</span>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <span>Git</span>
            <span>2 años</span>
          </div>
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
  )
}
