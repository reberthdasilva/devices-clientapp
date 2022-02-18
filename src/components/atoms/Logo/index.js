import React from 'react';
import LogoStyled from './Styled';

const Logo = () => (
    <LogoStyled>
        Ninja<span>RMM</span>
    </LogoStyled>
);

export default React.memo(Logo);
