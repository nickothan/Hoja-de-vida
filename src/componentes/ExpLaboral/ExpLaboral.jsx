import { ExpLabContainer, Date, Skills } from './styles'

import { LinkContainer } from '../Proyectos/styles'
import { ReactComponent as LinkIcon } from '../assets/link.svg'

export default function ExpLaboral() {
  return (
    <ExpLabContainer>
      <h2>Work experience</h2>
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
        Maintenance and updates of designs, layouts and animations of forms.
        Creation and update of components for frontend.
      </p>
      <Skills>
        HTML, CSS3, JQuery, TypeScript, react, styled components, storybook
      </Skills>
    </ExpLabContainer>
  )
}
