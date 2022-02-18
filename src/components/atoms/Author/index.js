import React from 'react';
import AuthorStyled from './Styled';

const Author = () => (
    <AuthorStyled>
        Developed by {' '}
        <a href='https://www.linkedin.com/in/reberth' target='_blank' rel="noreferrer">
            Reberth
        </a>
    </AuthorStyled>
);

export default React.memo(Author);
