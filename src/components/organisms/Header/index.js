import React from "react";
import HeaderStyled from './Styled';
import { Logo } from '../../atoms';

const Header = () => (
    <HeaderStyled>
        <Logo />
    </HeaderStyled>
);

export default React.memo(Header);
