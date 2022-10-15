import { trackAction } from '@micro-observability/utils';
import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { getUserId } from '@micro-observability/utils';
import { Portal } from './Portal';


const GlobalStyle = createGlobalStyle`
    .modal-root {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #182026cc;
        overflow: hidden;
        z-index: 999;
        transition: all 0.3s ease-in-out;
    }
`;

const ModalContainer = styled.div`
    position: relative;
    width: 400px;
    height: 300px;
    background-color: #182026;
    border: 2px solid #a1e5d6;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ModalTitle = styled.p`
    font-size: 72px;
    font-weight: 900;
    background: linear-gradient(to right bottom, #7191c0, #fac4a2, #fff393, #a1e5d6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 10px;
`;

const ModalText = styled.p`
    color: white;
`;

const ModalButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const ErrorModal = ({ isOpen, onClose, meta = {} }) => {    
    if(!isOpen) return null;

    useEffect(() => {
        trackAction('error_modal_displayed', {
            ...meta,
            userId: getUserId(),
        });
    }, []);

    return (
        <Portal>
            <GlobalStyle />
            <ModalContainer>
                <ModalButton onClick={onClose}>X Close</ModalButton>
                <ModalTitle>ERROR</ModalTitle>
                <ModalText>An error occured {meta.componentSource ? `in ${meta.componentSource}` : ''}</ModalText>
            </ModalContainer>
        </Portal>
    );
};

export { ErrorModal };