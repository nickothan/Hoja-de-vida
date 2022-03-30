import styled from "styled-components/macro";

export const ExperienciaContent = styled.div`
  border-top: 3px solid #dfdfff;
  padding-top: 25px;

  & > ul {
    list-style: none;
    max-width: 300px;
    margin-bottom: 20px;
  }

  h5 {
    margin: 10px 0;
  }

  & > ul > li {
  }

  ul > li > div,
  ul > li > ul > li {
    display: grid;
    grid-template-columns: 1fr 100px;
    margin-bottom: 7px;
  }

  & > ul > li > ul {
    margin-left: 20px;
    grid-row: span 2;
    margin-top: 3px;
    max-width: 100%;
  }
`;
