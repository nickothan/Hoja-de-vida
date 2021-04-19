import styled from "styled-components";

export const Main = styled.div`
    background-color: #ffbd4a;

    .container {
        margin: auto;
        width: 100%;
        max-width: 768px;
        background-color: #fff5e7;
        padding: 20px;
        box-sizing: border-box;
    }

    .rejilla {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        border-top: 3px solid #ffbd4a;
        border-bottom: 3px solid #ffbd4a;

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
        border-right: 3px solid #ffbd4a;

        @media (max-width: 425px) {
            border: none;
        }
    }
`;
