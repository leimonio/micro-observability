import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 15px 20px;
`;

export const Title = styled.h1`
    font-size: 72px;
    font-weight: 900;
    background: linear-gradient(to right bottom, #7191c0, #fac4a2, #fff393, #a1e5d6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 10px;
`;

export const HeaderContainer = styled.div`
    border: 2px solid #a1e5d6;
    border-radius: 5px;
    margin: 0 0 30px;
    padding: 20px 20px 10px 20px;
    position: relative;

    &::before {
        content: 'Header';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: #a1e5d6;
        color: #182026;
        height: 18px;
        font-size: 14px;
        font-weight: 600;
        padding: 0 0 0 20px;
    }
`;

export const ProfileContainer = styled.div`
    border: 2px solid #fac4a2;
    border-radius: 5px;
    margin: 0 0 30px;
    padding: 20px 20px 10px 20px;
    position: relative;

    &:before {
        content: 'Profile';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: #fac4a2;
        color: #182026;
        height: 18px;
        font-size: 14px;
        font-weight: 600;
        padding: 0 0 0 20px;
    }
`;

export const FooterContainer = styled.div`
    border: 2px solid #7191c0;
    border-radius: 5px;
    padding: 20px 20px 10px 20px;
    position: relative;

    &::before {
        content: 'Footer';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: #7191c0;
        color: #182026;
        height: 18px;
        font-size: 14px;
        font-weight: 600;
        padding: 0 0 0 20px;
    }
`;
