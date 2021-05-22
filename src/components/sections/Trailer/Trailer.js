import React ,{useState,useRef}from 'react'
import {Button} from '../../reusableComponents/Button'
import {VideoTitle,VideoPlayer,CloseIcon,Source,Title,Container,ImageBg,VideoSlider,ImageTrailer,ImagePlayButton} from './TrailerElements'
import tsta from '../../../images/tsta.png'
import play from '../../../images/play1.png'
import tstav from '../../../assets/videos/TSTA.mp4'
import {useStaticQuery, graphql} from "gatsby"

const Trailer = () => {
    const [clicked, setClicked] = useState(false)

    let vid = useRef(null)

    const openVideo = (e) =>{
        e.preventDefault()
        setClicked(prevState => !prevState)
        console.log(clicked)
        vid.pause();
        vid.currentTime = 0;
    }


    const data = useStaticQuery(graphql`
    query HomeSectionTrailerBg {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["tsta"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      `)
  
    return (
       <Container>
            <Title>Watch the official Book trailer</Title>
            <VideoSlider>
              <ImageBg>
                <VideoTitle>To Spell The Awakening</VideoTitle>
                { data.allFile.edges.map((image,key)=> (
                    <ImageTrailer key={key} fluid={image.node.childImageSharp.fluid} />
                    ))}
                {/* <ImageTrailer src={tsta} /> */}
                <ImagePlayButton src={play} onClick={openVideo} isClicked={clicked}/>
              </ImageBg>
            </VideoSlider>
            <VideoPlayer isClicked={clicked}>
                    <Source  src={tstav} ref={el => vid = el} type="video/mp4"  controls="true" autoplay/>
                    <CloseIcon onClick={openVideo}/>
            </VideoPlayer>
           
            <Button primary="true" round="true">See All Book Trailer</Button>
       </Container>
    )
}

export default Trailer
