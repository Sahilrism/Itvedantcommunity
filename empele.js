import styled from 'styled-components';


export const EmpContainer= styled.div`
height: 300px;
display: flex;
padding: 1px 100px;
justify-content: center;
align-items: center;
text-align: center;
background: #fff;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
grid-gap: 0px;
margin-top: 1px;

@media screen and (max-width: 768px) {
    height: 500px;
}

@media screen and (max-width: 480px) {
    height: 400px;
}
`;

export const EmpContent = styled.div `
margin-top:300px;
max-width: 5000px;
position: absolute;
padding: 10px ;
display: grid;
flex-direction: column;
align-items: center;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
`;

export const EmpContent2 = styled.div `
margin-top:1px;
margin-bottom: 150px;
max-width: 1000px;
position: absolute;
padding: 10px ;
display: grid;
flex-direction: column;
align-items: left;
grid-template-columns: 1fr 1fr;
`;

export const EmpContent3 = styled.div `
margin-top:10px;
margin-bottom: 10px;
position: absolute;
padding: 10px ;
display: grid;
align-items: center;
flex-direction: column;
grid-template-columns: 1fr 1fr;
`;

export const EmpH1 = styled.h1`
color: #fff;
font-size: 35px;
text-align: left;
padding: 1px 24px;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const EmpH2 = styled.h1`
color: #fff;
font-size: 25px;
text-align: center;
margin-top: 10px;
margin-bottom:30px;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const EmpH3 = styled.h1`
color: #fff;
font-size: 15px;
text-align: left;
margin-top: 10px;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const EmpCard = styled.div `

display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
max-height: auto;
max-width: 350px;
border-radius: 10px;
margin-top: 10px;
margin-bottom: 10px;
margin-left: 30px;
padding: 8px 10px;
box-shadow: 0px 0 0px 1px rgba(205,218,245);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale (1.02);
    transition: all 0.2s  ease-in-out;
    cursor: pointer;
}
`;

export const EmpBg= styled.div `
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video `
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`