import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkR)`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#01BF71' : '#010606' )};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px ' )};
color: ${({ dark }) => (dark ? '#010606' : '#fff' )};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px' )};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
transition: all 0.2s ease-in-out;
background: ${({ primary }) => (primary ? '#fff' : '#01BF71' )}; 
}
`; 


export const ButtonR = styled(LinkR)`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#01bf71' : '#010606' )};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px ' )};
color: ${({ dark }) => (dark ? '#010606' : '#fff' )};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px' )};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
margin-bottom: 20px;
transition: all 0.2s ease-in-out;

&:hover {
transition: all 0.2s ease-in-out;
background: ${({ primary }) => (primary ? '#fff' : '#01BF71' )}; 
}
`; 

export const ButtonA = styled(LinkS)`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#01BF71' : '#010606' )};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px ' )};
color: ${({ dark }) => (dark ? '#010606' : '#fff' )};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px' )};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
font-size: 25px;
transition: all 0.2s ease-in-out;

&:hover {
transition: all 0.2s ease-in-out;
background: ${({ primary }) => (primary ? '#fff' : '#01BF71' )}; 
}
`; 

export const ButtonS = styled(LinkR)`
border-radius: 5px;
background: ${({ primary }) => (primary ? '#01bf71' : '#010606' )};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px ' )};
color: ${({ dark }) => (dark ? '#010606' : '#fff' )};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px' )};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
margin-bottom: 20px;
transition: all 0.2s ease-in-out;

&:hover {
transition: all 0.2s ease-in-out;
background: ${({ primary }) => (primary ? '#fff' : '#01BF71' )}; 
}
`; 

export const Buttondata = styled(LinkR)`
border-radius: 5px;
background: ${({ primary }) => (primary ? '#fff' : '#010606' )};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px ' )};
color: ${({ dark }) => (dark ? '#010606' : '#fff' )};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px' )};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
margin-bottom: 10px;
margin-top: 50px;
transition: all 0.2s ease-in-out;

&:hover {
transition: all 0.2s ease-in-out;
background: ${({ primary }) => (primary ? '#fff' : '#01BF71' )}; 
}
`; 

export const ButtonV = styled.button`
border-radius: 50px;
background: #00CCCC;
white-space: nowrap;
padding: 5px 5px;
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px' )};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
margin-bottom: 10px;
transition: all 0.2s ease-in-out;
`; 

export const ButtonD = styled.button`
border-radius: 50px;
background: #ff3333;
white-space: nowrap;
padding: 5px 5px;
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px' )};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
margin-bottom: 10px;
transition: all 0.2s ease-in-out;
`; 

export const ButtonZ = styled.button`
border-radius: 5px;
background: #0080ff;
white-space: nowrap;
padding: 10px 50px;
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px' )};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
margin-bottom: 10px;
transition: all 0.2s ease-in-out;
`; 