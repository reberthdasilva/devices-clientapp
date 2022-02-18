import styled from "styled-components";

const OneColumnStyled = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 'header' 'main' 'footer';

    & > header {
        grid-area: header;
    }

    & > main {
        grid-area: main;
        padding: 15px 5px 10px 5px;
    }

    & > footer {
        grid-area: footer;  
    }
`;

export default OneColumnStyled;
