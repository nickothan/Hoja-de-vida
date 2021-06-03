import styled from "styled-components";

export const ExperienciaContent = styled.div`
  padding-top: 10px;

  li {
    list-style: none;
    margin-bottom: 30px;
  }

  h4 {
    margin-bottom: 2px;
  }

  a {
    display: block;
    margin-top: 7px;

    &:hover {
      color: #3535bb;
    }
  }
`;

export const LinkContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 10px 5px 5px;

  cursor: pointer;

  &:hover {
    color: #6658dd;
    background-color: #6658dd21;
  }

  a {
    height: 20px;
    line-height: 15px;
    font-weight: 600;
    margin-left: 10px;

    &:visited {
      color: #6658dd;
    }
  }

  svg {
    fill: #6658dd;
    color: #6658dd;
  }
`;
