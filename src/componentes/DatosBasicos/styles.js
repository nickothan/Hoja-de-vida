import styled from "styled-components";

export const DatosBasicos = styled.div`
    padding-bottom: 30px;
    display: grid;
    grid-template-columns: 2fr 4fr;

    justify-items: center;
    align-items: center;

    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
    }

    .imgDatosBasicos {
        margin: 10px;
        max-width: 200px;
        max-height: 200px;
        width: 100%;
        height: 100%;
        border-radius: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .titulosPrincipales {
        padding-left: 10px;
        border-left: 8px solid #ffbd4a;
    }

    .descipcionDatosBasicos {
        display: grid;
        grid-gap: 15px;
    }

    .infoDatosBasicos {
        display: grid;
        grid-gap: 10px;
    }
`;
