import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'


export const Container = styled.div`
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items:center;
 height: 45vh;
 width:100%;
 padding: 0 1rem;
 position: relative;
 ${'' /* margin-top: -96px; */}
 color: #fff;
 

 @media screen and (max-width: 807px){
    margin-top: -80px;  
 }
 @media screen and (max-width: 768px){
    margin-top: -76px;  
 }
 @media screen and (max-width:228px){
    margin-top: -106px;
}

 :before {
      content: "";
      position:absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index:2;
      background: linear-gradient(180deg,rgba(0,0,0,0.4) 0% ,rgba(0,0,0,0.8) 100%),linear-gradient(180deg,rgba(0,0,0,0.4) 0% ,transparent 100%);
 } 
`
export const ImageContainer = styled.div`
 position: absolute;
 top: 0;
 bottom: 0;
 right: 0;
 left: 0;
 width: 100%;
 height: 100%;
`
export const ImageBg = styled(Img)`
  width:100%;
  height:100%;
  -o-object-fit: cover;
  object-fit: cover ;
`
export const Description = styled.div`
 z-index: 3;
 padding: 4rem calc((100vw - 1200px) / 2);
 display:flex;
 justify-content:center;
 align-items:center;
 text-align:center;
 ${'' /* background:red; */}

 @media screen and (max-width: 984px){
     grid-template-columns: 1fr;
     padding: 2rem calc((100vw - 1200px) / 2);
 }
`
export const FirstLetter = styled.h1`
  font-size: 7rem;
  margin-right:-15px;
  color:var(--primary-color);
  @media screen and (max-width: 272px){
      margin-right:-20px;
  }
`
export const HeroTag = styled.h1`
 padding:0 1rem;
 font-size: clamp(1.5rem, 5vw , 3rem);
 font-weight:400;
 letter-spacing:2px;

` 