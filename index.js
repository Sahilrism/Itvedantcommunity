import React from 'react'
import { useState} from 'react';
import Navbar from '../Navbar';
import Axios from 'axios';
import { Container, Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, TextR } from './SiginEle'
import { ButtonS } from '../ButtonElement';
const SignIn = () => {
    const [hover, setHover]= useState(false)

   const onHover = () => {
       setHover(!hover)
   }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [contact, setCont] = useState(0);

    const addData= () => {
        Axios.post("http://localhost:3001/create/",{
             name: name,
             email: email,
             password: password,
             contact: contact
        }).then(()=>{
            console.log("Success")
        })
    };

    return (
        <>
        <Navbar />
           <Container>
                <FormWrap>
                    <FormContent>
                        <Form action='#' >
                            <FormH1>Create Your Account </FormH1>
                            <FormLabel htmlFor='for'>Name (Full Name)</FormLabel>
                            <FormInput type='text' onChange={(event)=>{setName(event.target.value);}} required />

                            <FormLabel htmlFor='for'> Email </FormLabel>
                            <FormInput type='email' onChange={(event)=>{setEmail(event.target.value);}} required />

                            <FormLabel htmlFor='for'>Password </FormLabel>
                            <FormInput type='password' onChange={(event)=>{setPass(event.target.value);}} required />

                            <FormLabel htmlFor='for'>Contact </FormLabel>
                            <FormInput type='number' onChange={(event)=>{setCont(event.target.value);}} required />

                            <ButtonS to ="/login" onClick={addData} onMouseEnter= {onHover} onMouseLeave={onHover} primary='true' dark='true'>
                                        Submit {hover }
                             </ButtonS>
                            <TextR to="/login">Already Have Account ? Login </TextR>
                            
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container> 
        </>
    )
}

export default SignIn