import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    background: linear-gradient(to right, #7191c0, #fac4a2, #a1e5d6);
    color: #182026;
    font-family: 'Libre Franklin', Arial, sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 1;
    border: none;
    max-width: 200px;
    margin: 10px 10px 10px 0;
    padding: 15px 20px;
    cursor: pointer;
    border-radius: 3px;
    opacity: ${({ disabled } = {}) => disabled ? 0.6 : 1}
`;