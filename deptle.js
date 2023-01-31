import styled from 'styled-components';


export const DeptContainer= styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0 50px;
height: 180px;
width: 100%;
position: relative;
z-index: 1;
`;

export const DeptContent = styled.div `
z-index: 3;
margin-top:50px;
max-width: 1500px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const DeptH1 = styled.h1`
color: #01bf71;
font-size: 45px;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;