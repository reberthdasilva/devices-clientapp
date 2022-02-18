import React from "react";
import FooterStyled from './Styled';
import { Author } from '../../atoms';

const Footer = () => (
    <FooterStyled>
        <Author />
    </FooterStyled>
);

export default React.memo(Footer);
