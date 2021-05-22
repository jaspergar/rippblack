import React from 'react'
// import aboutBg from '../../../images/aboutBg.jpg'
import {Container,ImageContainer,ImageBg,Description,FirstLetter,HeroTag} from './HeroElements'
import {useStaticQuery, graphql} from "gatsby"

function Hero() {

    const data = useStaticQuery(graphql`
    query BioSectionHeroBg {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["aboutBg"]}}) {
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
                <ImageContainer>
                  { data.allFile.edges.map((image,key)=> (
                    <ImageBg key={key} fluid={image.node.childImageSharp.fluid} />
                    ))}
                    {/* <ImageBg src={aboutBg}/> */}
                </ImageContainer>

                <Description>
                      <FirstLetter>H</FirstLetter>
                      <HeroTag>ere's my story</HeroTag>
                </Description>
             </Container>
    )
}

export default Hero
