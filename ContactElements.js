import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div `
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: #01bf71;
`;

export const FormWrap = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px) {
    height: 80%;
}
`;

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const FormContent = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px) {
    padding: 10px;
}
`;

export const Form = styled.form `
background: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1px;
display: grid;
margin: 0 auto;
padding: 50px 30px;
border-radius: 20px;
box-shadow: 0 1px 5px rgba(0,0,0,1.8);

@media screen and (max-width: 400px) {
    padding: 32px 32px;
}
`;

export const FormH1 = styled.h1 `
margin-bottom: 20px;
font-size: 40px;
color: #010101;
font-weight: 2000;
text-align: center;
`;

export const FormLabel = styled.label `
margin-bottom: 8px;
font-size: 18px;
font-weight: 2000px;
color: #fff;
`;

export const FormInput = styled.input`
padding: 16px 50px ;
margin-bottom: 32px;
border: 5;
border-radius: 4px;
color: #010101;
`;

export const FormInputs = styled.input`
padding: 25px 50px ;
margin-bottom: 32px;
border: 5;
border-radius: 4px;
`;

export const FormButton = styled.button `
background: #01bf71;
padding: 16px 0;
border: 3;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`;

export const Text = styled.span `
text-align: left;
margin-top: 10px;
color: #010606;
font-size: 22px;
font-weight: 100px;
`;

export const ContainerWrapper = styled.div `
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1.5fr 2fr ;
align-items: center;
grid-gap: 30px;
padding: 0 30px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr ;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`;

export const ContactCard = styled.div `
background: #01bf71;
display: flex;
flex-direction: column;
justify-contenr: center;
align-items: center;
max-height: auto;
max-width: auto;
border-radius: 50px;
padding: 30px;
margin-top:100px;
box-shadow: 0 1px 3px rgba(0,0,0,0);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s  ease-in-out;
    cursor: pointer;
}
`;

export const ContactIcon = styled.img `
height: 200px;
width: 160px;
margin: bottom;
`;