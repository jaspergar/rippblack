import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
 display:flex;
 padding: 4rem calc((100vw - 1200px) / 2);
 ${'' /* background:red; */}
 @media screen and (max-width: 768px){
     flex-direction:column;
 }
`
export const ColumnOne =styled.div`
${'' /* background:yellow; */}
width:100%;
padding:0 1rem;
`
export const Head =styled.div`
display:flex;
flex-direction:column;
margin-bottom:1rem;
`
export const Title = styled.h1`
font-family:'Roboto';
margin-bottom: 1rem;
color:var(--secondary-color);
`
export const P = styled.p`
font-family:'Roboto';
font-size:14px;
letter-spacing:1.3px;
line-height:1.5;
margin-bottom:1rem;
font-weight:400;
`
export const Form =styled.form`
  ${'' /* background:red; */}
  display:flex;
  flex-direction:column;
`
export const FormInput = styled.div`
 display:flex;
  flex-direction:column;
  margin-bottom:1rem;
`
export const Label = styled.p`
font-family:'Roboto';
font-size:14px;
letter-spacing:1.3px;
line-height:1.5;
margin-bottom:0.5rem;
margin-left:.2rem;
font-weight:500;
`
export const Input = styled.input`
    padding : .9rem 1rem;
     outline: none;
     width: 100%;
     border-radius:50px;
     ${'' /* border-color:#c2c5cc; */}
     ${'' /* resize: none; */}
     border-width:0px;
     border:none;
     background: #ececec;
`
export const InputMessage = styled.textarea`
 width:100%;
     padding : 1rem 1.5rem;
       resize: none;
       font-size: 14px;
       color: #111;
       border-width:0px;
       border:none;
       outline:none;
       border-radius:10px;
       min-height: 120px;
       border-color:lightgrey;
       margin-bottom:.5rem;
       background: #ececec;
`

export const ColumnTwo = styled.div`
${'' /* background:pink; */}
width:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
padding:0 1rem;
`
export const ImageContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
${'' /* background:red; */}
padding:0 4rem;
width:100%;
${'' /* height:100%; */}
margin-bottom:2rem;
`
export const ImageSvg = styled.img`
width:100%;
overflow:hidden;
`

export const ContactInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
padding:0 4rem;
width:100%;
`
export const InfoH = styled.h3`
margin-bottom:1rem;
font-family:'Roboto';
font-size:clamp(1rem, 3vw, 2rem);
color:var(--secondary-color);
`
export const InfoP = styled.p`
margin-bottom:.5rem;
font-family:'Roboto';
font-size:clamp(.8rem, 3vw, 1rem);

span{
    font-weight:600;
    font-family:'Roboto';
    }
`
export const ButtonContainer = styled.div`

overflow:hidden;
 display: flex;
 align-items:center;
 height:55px;
 margin-bottom:1rem;
 @media screen and (max-width: 768px){
                            align-items:center;
                            justify-content:center;
                            text-align:center;
                         }
`