import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding: 4rem  calc((100vw - 1200px) / 2);
`
export const Wrapper = styled.div`
${'' /* background:red; */}
display: flex;
padding:0 3rem;
margin-bottom:1rem;

@media screen and (max-width: 1000px){
    flex-direction:column;
}
`
export const ImageContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
${'' /* background:yellow; */}
height:100%;
width:100%;
margin-right:3rem;
margin-bottom:2rem;
`
export const RhondaImage = styled.img`
width:100%;
  -o-object-fit: cover;
  object-fit: cover ;
  overflow:hidden;
  @media screen and (max-width: 1000px){
    width:40%;
}
`
export const Pwrapper = styled.div`
padding:0 3rem;
`

export const P = styled.div`
margin-bottom:1.5rem;
 text-align:start;
 letter-spacing:1.3px;
 font-size:clamp(.7rem, 5vw, 1.2rem);
 line-height:1.7;
 font-weight:300;
 font-family:'Roboto';
`
