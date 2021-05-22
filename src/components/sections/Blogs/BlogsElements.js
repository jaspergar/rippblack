import styled from 'styled-components'


export const BlogContainer = styled.div`
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


 ${'' /* :before {
      content: "";
      position:absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index:2;
      background: linear-gradient(180deg,rgba(0,0,0,0.4) 0% ,rgba(0,0,0,0.8) 100%),linear-gradient(180deg,rgba(0,0,0,0.4) 0% ,transparent 100%)
 } */}
`




export const BgImage = styled.img`
 width:100%;
 height:100%;
  ${'' /* height:100%; */}
  -o-object-fit: cover;
  object-fit: cover ;
`


export const Content = styled.div`
${'' /* position:absolute; */}
 z-index: 3;
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
export const Title = styled.div`
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
export const CardContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-items:center;
  padding: 0 2rem;
  margin-bottom:2rem;

  ${'' /* @media screen and (max-width: 1200px){
    grid-template-columns: 1fr 1fr;
  } */}
  @media screen and (max-width: 868px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px){
    grid-template-columns: 1fr;
  }

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
overflow:hidden;
`
export const ImageContainer = styled.div`
 height: 100%;
 max-width:100%;
 ${'' /* border-radius:10px; */}
 overflow:hidden;
 margin-bottom:2rem;
`

export const CardImage= styled.img`
  height:100%;
  width:100%;
  object-fit:cover;
  border-radius:10px 10px 0 0;
  overflow:hidden;
  margin-bottom:2rem;
`

export const CardInfo = styled.div`
  ${'' /* background:red; */}
  height:100%;
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