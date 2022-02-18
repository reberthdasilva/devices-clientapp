import React from "react";
import OneColumnStyled from './Styled';
import { Header, Footer, Main } from '../../organisms';

const OneColumn = ({ children }) => (
    <OneColumnStyled>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </OneColumnStyled>
);

export default OneColumn;
