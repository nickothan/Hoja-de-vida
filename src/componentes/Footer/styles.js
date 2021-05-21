import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-evenly;

    @media (max-width: 425px) {
        flex-direction: column;
    }
    a {
        display: flex;
        color: #5a5ac7;
        align-items: center;

        &:hover {
            color: #3535bb;
        }
    }
    h3 {
        margin-left: 10px;
    }
`;
