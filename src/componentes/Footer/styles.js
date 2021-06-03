import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 20px 7px;
  justify-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
  }

  span {
    margin-left: 10px;
  }
`;
