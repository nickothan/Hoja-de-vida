import styled from "styled-components/macro";

export const DatosBasicosContainer = styled.div`
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: 2fr 4fr;

  justify-items: center;
  align-items: center;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Img = styled.div`
  margin: 10px;

  max-width: 200px;
  max-height: 200px;
  width: 100%;
  height: 100%;
  border-radius: 100%;

  img {
    width: 98%;
    height: auto;
    border-radius: 100%;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 15px;
`;

export const Titulos = styled.div`
  padding-left: 10px;
  border-left: 8px solid #dfdfff;
`;

export const ContenInfo = styled.ul`
  margin-top: 10px;
  display: grid;
  grid-gap: 10px;

  p {
    line-height: 0.9rem;
  }

  @media (max-width: 425px) {
    padding: 5px 15px;
  }
`;
export const InfoContainer = styled.div`
  display: flex;

  p {
    margin-left: 10px;
  }
`;
