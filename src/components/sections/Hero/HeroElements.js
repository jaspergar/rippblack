import styled from 'styled-components'
import Img from 'gatsby-image'


export const HeroContainer = styled.div`
${'' /* visibility:hidden; */}
 
 background: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items:center;
 height: 100%;
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
export const HeroBg = styled.div`

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

export const Content = styled.div`
 z-index: 3;
 padding: 4rem calc((100vw - 1200px) / 2);
 display:grid;
 grid-template-columns: 2fr  1fr;

 @media screen and (max-width: 984px){
     grid-template-columns: 1fr;
     padding: 2rem calc((100vw - 1200px) / 2);
 }
`

export const ColumnOne = styled.div`
${'' /* background:yellow; */}
display:flex;
flex-direction:column;
justify-content:center;
padding: 0 2rem;
    p{
        margin-left:60px;
        margin-bottom:20px;
        font-size:clamp(.8 , 5vw , 1rem);
    }
`
export const Headline = styled.h1`
 margin-bottom:1rem;
 font-weight: 700;
 ${'' /* font-family: 'Poppins-Black', sans-serif; */}
 font-size: clamp(.8rem , 5vw , 30px);
 font-style:italic;
 line-height: 40px;
 letter-spacing:0.05em;
 ${'' /* color: red; */}

 @media screen and (max-width: 768px){
     line-height: 2.5rem;
 }

 span{
     ${'' /* color:var(--primary-color); */}
     ${'' /* font-family: 'Poppins-Black' , sans-serif; */}
     font-style:italic;
     font-size:70px;
     font-weight:700;
 }
`
export const Description = styled.div`
 font-weight: 400;
 margin-bottom:1.5rem;
 font-size: clamp(.9 , 5vw , 1.2rem);
 line-height: 30px;
 letter-spacing: 0.02em;
 width:100%;
 text-align:end;
 @media screen and (max-width: 768px){
     width: 100%;
 }
`
export const ColumnTwo = styled.div`
${'' /* padding: 0 2rem; */}
${'' /* background:red; */}
`
export const ImageContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

 
height:515px;
widht:615px;
${'' /* background:red; */}

@media screen and (max-width: 356px){
  widht:400px;
  height:300px;
  padding: 0 2rem;
}
`

export const Image = styled.img`
   width:100%;
 height:100%;
 -o-object-fit: cover;
  object-fit: cover ;
  overflow:hidden;

}
`

export const ButtonContainer = styled.div`
 overflow:hidden;
 display: flex;
 align-items:center;
height:60px;
margin-bottom:1.5rem;
`