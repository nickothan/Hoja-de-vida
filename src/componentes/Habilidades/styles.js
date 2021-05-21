import styled from "styled-components";

export const HabilidadesContent = styled.div`
  padding-top: 10px;

  ul {
    list-style: none;

    max-width: 200px;
  }

  li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 7px;
  }
`;
