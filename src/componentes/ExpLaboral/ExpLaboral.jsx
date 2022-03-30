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
        Maintenance and updates of designs, layouts and animations of web pages.
        Create environments, create structures for isolates components in
        modular development compositions and update UI components.
      </p>
      <Skills>
        HTML, CSS3, JQuery, TypeScript, react, styled components, storybook
      </Skills>
    </ExpLabContainer>
  )
}
