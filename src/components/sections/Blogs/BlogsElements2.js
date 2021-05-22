import styled from 'styled-components'
import Img from "gatsby-image"


export const BlogContainer = styled.div`
 background: #0c0c0c;
 ${'' /* display: flex;
 justify-content: center;
 align-items:center; */}
height: 100%; 
 width:100%;
 padding: 0 1rem;
 position: relative;
 ${'' /* margin-top: -96px; */}
 color: #fff;
 z-index:0;
overflow:hidden;
 :before {
      content: "";
      position:absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index:-1;
      background: linear-gradient(180deg,rgba(0,0,0,0.4) 0% ,rgba(0,0,0,0.8) 100%),linear-gradient(180deg,rgba(0,0,0,0.4) 0% ,transparent 100%)
 }   
`




export const BgImage = styled(Img)`
 position:absolute;
 width:100%;
 height:100%;
  ${'' /* height:100%; */}
  -o-object-fit: cover;
  object-fit: cover ;
  z-index:-2;
`


export const Content = styled.div`
${'' /* position:absolute; */}
 ${'' /* z-index: 1000; */}
 padding: 4rem calc((100vw - 1200px) / 2);
 display:flex;
 flex-direction:column;
 ${'' /* justify-content:center; */}
 align-items:center;
${'' /* background:red; */}
height:100%;
width:100%;
text-align:center;
 ${'' /* display:grid;
 grid-template-columns: 2fr  1fr;

 @media screen and (max-width: 984px){
     grid-template-columns: 1fr;
     padding: 2rem calc((100vw - 1200px) / 2);
 } */}
`
export const Title = styled.h2`
font-size:  clamp(.8rem , 5vw , 36px);
  font-weight:700;
  font-style:bold;

  margin-bottom:2rem;
  padding:0 1rem;
`
export const Description = styled.div`
font-size:  clamp(.5rem , 5vw , 14px);
margin-bottom:2rem;
padding:0 1rem;
`

export const Grid = styled.div`
 display:grid;
 width:100%;
 grid-gap:1rem;
 grid-template-columns: repeat(auto-fit, minmax(15rem,1fr));
 align-items:start;
 margin-bottom:2rem;

`

export const CardContainer = styled.div`
 background:#fff;
border-radius: 10px;

overflow:hidden;
${'' /* transition: 0.2s; */}
${'' /* box-shadow: 0 3rem 6rem rgba(0,0,0,0.1);

&:hover {
   box-shadow: 0 4rem 8rem rgba(0,0,0,0.5);
    transform: translateY(-0.5%);
  } */}
`
export const Card = styled.div`
width: 100%;
height: 100%;
background:#fff;
border-radius: 10px;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
position:relative;
`


export const CardImage= styled.img`
display:block;
width:100%;
height:10rem;
object-fit:cover;
`

export const CardInfo = styled.div`
  ${'' /* background:red; */}
 padding:3rem;
`

export const CardTitle = styled.h3`
 font-weight: 700;
 font-size:  clamp(.5rem , 5vw , 14px);
 color:#111;
 margin-bottom:1rem;
 
`
export const CardDescription = styled.p`
  font-weight: 700;
 font-size:  clamp(.5rem , 5vw , 18px);
 color:#111;
 margin-bottom:2rem;
 padding: 0 1rem;
`