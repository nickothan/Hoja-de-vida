import styled from 'styled-components/macro'

export const ExperienciaContent = styled.div`
  padding-top: 10px;

  li {
    list-style: none;
    margin-bottom: 30px;
  }

  h4 {
    margin-bottom: 2px;
  }
`

export const LinkContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 10px 5px 5px;

  cursor: pointer;

  animation-timing-function: linear;

  &:hover {
    font-weight: 600;
    color: #6658dd;
    background-color: #6658dd21;
  }

  a {
    margin-left: 10px;
  }

  svg {
    fill: #6658dd;
    color: #6658dd;
  }
`
