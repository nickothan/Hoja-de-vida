import { ExpLabContainer, Date, Skills } from './styles'

import { LinkContainer } from '../Proyectos/styles'
import { ReactComponent as LinkIcon } from '../assets/link.svg'

export default function ExpLaboral() {
  return (
    <ExpLabContainer>
      <h2>Experiencia Laboral</h2>
      <br />

      <LinkContainer>
        <LinkIcon />
        <a
          href='https://www.linkedin.com/company/revdevar/about/'
          target='_blank'
          rel='noreferrer'>
          <span>Rev Dev</span>
        </a>
      </LinkContainer>
      <Date>MAR-2021</Date>
      <p>
        Mantenimiento y actualizaciones de diseños, maquetados y animaciones de
        formularios. Creacion y actualizacion de componentes para frontend.
      </p>
      <Skills>
        HTML, CSS3, JQuery, TypeScript, react, styled components, storybook
      </Skills>
    </ExpLabContainer>
  )
}
