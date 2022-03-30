import { } from './styles'

import { ReactComponent as LinkIcon } from '../../assets/link.svg'

export default function LinkContaier() {

  return(
    <LinkIcon />
    <a target='_blank' rel='noreferrer' href={e.link}>
      <span>{e.title}</span>
    </a>
  )
}