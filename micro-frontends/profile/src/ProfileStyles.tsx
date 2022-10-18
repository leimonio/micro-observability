import styled, { keyframes } from 'styled-components';

export const ProfileContainer = styled.main`
    color: #ffffff;
`;

export const ProfileHeader = styled.header`
    display: flex;
    align-items: center;
    margin: 0 0 20px;
`;

export const ProfileContent = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Character = styled.div`
    display: flex;
    font-family: 'Libre Franklin', Arial, sans-serif;
    font-size: 16px;
    line-height: 1;
`;

export const CharacterImage = styled.img`
    border: 0;
    border-radius: 5px;
    display: block;
    max-width:300px;
    max-height:300px;
    width: auto;
    height: auto;
`;

export const CharacterInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;

export const CharacterInfoDetail = styled.p`
    margin: 0 0 14px;
`;

export const CharacterInfoDetailName = styled.span`
    color: #a1e5d6;
    font-weight: bold;
`;

const loaderSpin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`
export const Loader = styled.span`
    display: inline-block;
    height: 30px;
    font-size: 30px;
    pointer-events: none;
    margin: 0 0 0 20px;
    -webkit-animation: ${loaderSpin} 1s infinite linear;
    -moz-animation: ${loaderSpin} 1s infinite linear;
    -o-animation: ${loaderSpin} 1s infinite linear;
    animation: ${loaderSpin} 1s infinite linear;
`;

export const Title = styled.h3`
    font-size: 50px;
	font-weight: 800;
	background: linear-gradient(to right bottom, #fac4a2, #fff393, #a1e5d6, #7191c0);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-family: 'Libre Franklin';
	margin: 0;
`;
