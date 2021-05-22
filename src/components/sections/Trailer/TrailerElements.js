import styled from 'styled-components'
import {FaTimes} from '@react-icons/all-files/fa/FaTimes'
import Img from 'gatsby-image'


export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding: 4rem  calc((100vw - 1200px) / 2);
`

export const Title = styled.h2`
  font-size:  clamp(.8rem , 5vw , 36px);
  font-weight:700;
  font-style:bold;

  margin-bottom:4rem;
  padding:0 1rem;
`
export const VideoSlider = styled.div`
 display:flex;
 justify-content: center;
 align-items:center;
 text-align:center;
 margin-bottom:4rem;
 
 width:60%;

 @media screen and (max-width: 768px){
     width:100%;
     padding: 0 2rem;
 }
`
export const ImageBg = styled.div`
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items:center;
 text-align:center;
 width:100%;
 ${'' /* padding: 0 1rem; */}
 position: relative;
 :before {
      content: "";
      position:absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index:2;
      background: rgba(17, 17, 17, 0.2);
 }
`

export const VideoTitle = styled.h3`
  ${'' /* width: 100%; */}
    position: absolute;
    left:0%;
    top:0%;
    transform: translate(20%,80%);
    z-index:10;
    color:#fff;
    font-size: clamp(.5rem, 3vw , 14px);
    font-family:'Roboto';
    ${'' /* background:red; */}
    ${'' /* text-align:start; */}
    ${'' /* margin-left:20px; */}
    ${'' /* -o-object-fit: fill;
  object-fit: fill ;
  overflow:hidden;
  cursor:pointer; */}
`
export const ImageTrailer = styled(Img)`
   width:100%;
  -o-object-fit: fill;
  object-fit: fill ;
  overflow:hidden;
  `

  export const ImagePlayButton = styled.img`
  width: 10%;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    z-index:10;
    -o-object-fit: fill;
  object-fit: fill ;
  overflow:hidden;
  cursor:pointer;
  `

  export const VideoPlayer = styled.div`
    ${'' /* padding:7rem 0; */}
    width:100vw;
    height:100%;
    display:flex;
    justify-content:center;
    alignt-items:center;
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
     z-index:10;
     background: rgba(0,0,0,1);
     visibility: ${({isClicked}) => (isClicked ? "visible" :  "hidden")};
     opacity:${({isClicked}) => (isClicked ? "1" :  "0")};
     
  `
  export const Source = styled.video`
    position:relative;
    ${'' /* width:100%; */}
    padding:5rem 0;
    ${'' /* max-width:900px; */}
    outline:none;
    overflow:hidden;
    @media (max-width: 991px){
        max-width:90%;
    }
  `

 export const CloseIcon = styled(FaTimes)`
    color:#fff; 
    position:absolute;
    font-size:30px;
    top: 60px;
    right:60px;
    z-index:20;
    cursor:pointer;
    ${'' /* filter: invert(1); */}
    max-width:32px;

    @media screen and (max-width: 768px){
        top: 60px;
        right:25px;
    }
   `

  