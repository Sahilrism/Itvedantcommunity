import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const Container = styled.div `
height: 230px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #008000;

@media screen and (max-width: 768px) {
    height: 500px;
}

@media screen and (max-width: 480px) {
    height: 400px;
}
`;

export const AboutCard = styled.div `
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
max-height: auto;
max-width: 1000px;
border-radius: 50px;
padding: 50px;
margin-top: -50px;
margin-left: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.8);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s  ease-in-out;
    cursor: pointer;
}
`;

export const AboutWrapper = styled.div `
max-width: 1000px;
margin: 0 440px;
display: grid;
grid-template-columns: 1fr ;
align-items: center;
grid-gap: 16px;
padding: 0 10px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr ;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;

export const Text = styled.span `
text-align: left;
margin-top: 10px;
margin-bottom: 20px;
color: #010606;
font-size: 22px;
font-weight: 100px;
`;

export const FormH1 = styled.h1 `
margin-bottom: 20px;
font-size: 2.0rem;
color: #008000;
font-weight: 2000;
text-align: left;
`;


export const AboutH1 = styled.h1 `
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const AboutButton = styled(LinkR) `
background: #008000;
padding: 10px 10px ;
border: 3;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`;

export const ButtonWrapper = styled.div `
align-items: left;
margin-top: 10px;
display: flex;
grid-gap: 10px;
`