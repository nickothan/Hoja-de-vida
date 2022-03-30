import { ExperienciaContent } from './styles.js'

// import data from "./Data.json";

//* CN-7: integrar scss y styled components a css
//TODO CN-8: Estilos para la sublista
//* CN-9: integrar jquery, react y typescript a javascript
//TODO cn-10: agregar stoorybook

export default function Experiencia() {
  return (
    <ExperienciaContent>
      <h2>Skills</h2>
      <br />
      <ul>
        <li>
          <div>
            <span>HTML</span>
            <span>3 years</span>
          </div>
        </li>
        <li>
          <div>
            <span>CSS</span>
            <span>3 years</span>
          </div>
          <ul>
            <li>
              <span>SCSS</span>
              <span>2 years</span>
            </li>
            <li>
              <span>Styled Components</span>
              <span>1 year</span>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <span>JavaScript</span>
            <span>3 years</span>
          </div>
          <ul>
            <li>
              <span>Jquery</span>
              <span>2 years</span>
            </li>
            <li>
              <span>React</span>
              <span>1 year</span>
            </li>
            <li>
              <span>TypeScript</span>
              <span>1 year</span>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <span>Git</span>

            <span>2 years</span>
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
                  <span>{` ${time} ${time === 1 ? "year" : "years"}`}</span>
                </li>
              );
            })}
          </ul>
        );
      })*/}
    </ExperienciaContent>
  )
}
