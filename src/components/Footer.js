import React from 'react'
import { Button } from './reusableComponents/Button'
import styled from "styled-components"
import {Link} from 'gatsby'
import fb from '../images/facebook.png'
import ins from '../images/instagram.png'
import twi from '../images/twitter.png'
import yout from '../images/youtube.png'
import gmail from '../images/gmail.png'

const Footer = () => {
    return (
      <Container>
         
          <Column>
                <Title>
                    QUICK LINKS
                </Title>
                <NavLinks>
                    Books
                </NavLinks>
                <NavLinks>
                    Blog
                </NavLinks>
                <NavLinks>
                    Bio
                </NavLinks>
                <NavLinks>
                    Contact
                </NavLinks>
          </Column>
          <Column>
                <Title>
                    SUBSCRIBE
                </Title>
                <NewsLetter>
                    <p>
                        Sign up with your email address to receive news and updates.
                    </p>
                    <NewsLetterForm>
                         <input placeholder="Email Address"/>
                         <Button
                         as="button" 
                        type="submit" 
                        primary="true" 
                        round="true" 
                        to="#"
                         >Subscribe</Button>
                    </NewsLetterForm>
                </NewsLetter>
          </Column>
          <Column>
                <Title>
                    FOLLOW ME 
                </Title>
                <SocialMediaIcons>
                    <IconImage>
                        <ImageIcon src={fb}/>
                    </IconImage>
                    <IconImage>
                        <ImageIcon src={twi}/>    
                    </IconImage>
                    <IconImage>
                        <ImageIcon src={ins}/>    
                    </IconImage>
                    <IconImage>
                        <ImageIcon src={yout}/>    
                    </IconImage>
                    <IconImage>
                        <ImageIcon src={gmail}/>    
                    </IconImage>
                </SocialMediaIcons>
                <FooterCopyRight>
                    <p><span>&#169;</span> Copyright 2021 by Rhonda Books - Ripp Black. </p><p>All Rights Reserved</p>
                </FooterCopyRight>
          </Column>
      </Container>
    )
}

export default Footer

const Container = styled.div`

 display:flex;
 justify-content:space-between;
 background:#111111;
 padding: 5rem calc((100vw - 1200px) / 2);

 @media screen and (max-width: 800px){
     flex-direction:column;
     align-items:center;
    justify-content:center;
    text-align:center;
    }
`
const Column = styled.div`
 display:flex;
 flex-direction:column;
 ${'' /* gap:1rem; */}
 @media screen and (max-width: 800px){
    margin-bottom:2rem;
    }
`
const Title = styled.h1`
color:#fff;
font-size:20px;
font-weight: 700;
margin-bottom:2rem;
text-align:center;
`
const NavLinks = styled(Link)`
 color:#fff;
 font-size:clamp(.7rem , 1vw , 1rem);
 margin-bottom:1.5rem;
 cursor:pointer;
 &:hover{
    color: var(--secondary-color);
  }
 ${'' /* @media screen and (max-width: 800px){
    font-size:clamp(0.8rem , 5vw , 1rem);
    } */}
 
`
const NewsLetter = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding: 1rem;
  p{

      font-size:clamp(.7rem , 1vw , 1rem);
      margin-bottom: 3rem;
      color:#fff;
  }

  ${'' /* @media screen and (max-width: 800px){
      p{
        font-size:clamp(0.8rem , 5vw , 1rem);
      }
    } */}
`
const NewsLetterForm = styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;

input{
    padding : 0.5rem 1rem;
    outline: none;
    width: 300px;
    height: 40px;
    border-radius:50px;
    border:none;
    margin-right: 1rem;
    font-size:12px;
    
}

@media screen and (max-width: 1098px){
    display:flex;
    flex-direction: column;
    padding: 0 1rem;

     input{
         margin-bottom: 1rem;
         ${'' /* width: 100%; */}
         margin-right:0;
         ${'' /* width:200px; */}
        
     }
}

@media screen and (max-width: 348px){
 

     input{
         margin-bottom: 1rem;
         width: 100%;
         margin-right:0;
        
     }
}
`

const FooterCopyRight = styled.div`
 ${'' /* background: #fafafa; */}
 ${'' /* padding : 2rem calc((100vw - 1200px) /2 ); */}
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
text-align:center;
gap:0.5rem;
font-size: clamp(.5rem , 1vw , 1rem);
color: grey;
width:100%;
margin-left:auto;
margin-right:auto;
border-top: 1px solid lightgrey;
padding-top:1rem;
@media screen and (max-width:400px) {
     padding: 1rem;
     width:80%;
 }
`

const SocialMediaIcons = styled.div`
 display:flex;
 align-items:center;
justify-content:center;
text-align:center;
gap:1rem;
margin-bottom:2rem;
`
const IconImage = styled.div`
display:flex;
  text-decoration:none;
  cursor: pointer;
`
const ImageIcon = styled.img`

height:30px;
 width:30px;
 @media screen and (max-width: 807px){
     width:20px;
     height:20px
 };
 `


