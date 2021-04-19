import styled from "styled-components";

export const Footer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-evenly;

    @media (max-width: 425px) {
        flex-direction: column;
    }
    a {
        display: flex;
        color: #333;
        align-items: center;
    }
    h3 {
        margin-left: 10px;
    }
`;
