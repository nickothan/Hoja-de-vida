import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  background-color: #ffebc9;
  color: #676573;

  .container {
    margin: 50px auto;
    box-shadow: 0 0 5px 1px #fdc4be;
    width: 100%;
    max-width: 768px;
    background-color: #fff5e7;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      margin: auto;
    }
  }

  .rejilla {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: 3px solid #ffebc9;
    border-bottom: 3px solid #ffebc9;

    @media (max-width: 425px) {
      display: flex;
      flex-direction: column;
    }
  }

  .ladoIzq,
  .ladoDer {
    padding: 15px;
  }

  .ladoIzq {
    border-right: 3px solid #ffebc9;

    @media (max-width: 425px) {
      border: none;
    }
  }
`;
