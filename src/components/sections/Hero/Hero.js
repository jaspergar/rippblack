import React from 'react'
import {HeroContainer,HeroBg,ImageBg,Content,ColumnOne,ColumnTwo,Headline,Description,ImageContainer,Image,ButtonContainer} from './HeroElements'
import { Button } from '../../reusableComponents/Button'
import spellTheAwakeningBook from '../../../images/spelltheawakening4.png'
import {useStaticQuery, graphql} from "gatsby"


const Hero = () => {
    const data = useStaticQuery(graphql`
    query HomeSectionHeroBg {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["heroBg"]}}) {
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
        <HeroContainer>
             <HeroBg>
                    { data.allFile.edges.map((image,key)=> (
                    <ImageBg key={key} fluid={image.node.childImageSharp.fluid} />
                    ))}
                 {/* <ImageBg src={heroBg}/> */}
             </HeroBg>

             <Content>
                    <ColumnOne>
                        <p>
                            Out Now!
                        </p>
                        <Headline>   
                        <span>“</span> This is perfect for curling up in your blanket and desappearing in a new world. A great story that becomes addictive very quickly. This is suprisingly absorbing fantasy, otherworld novel!
                        </Headline>
                        <Description>
                        - Amazon Reviews -
                        </Description>
                        <ButtonContainer>
                            <Button target="_blank" round={true} to="https://www.amazon.com/Spell-Awakening-Ripp-Black-ebook/dp/B092CC4JFN/ref=sr_1_2?crid=222JPXY68Q92J&dchild=1&keywords=to+spell+the+awakening&qid=1621599120&s=books&sprefix=to+spell+t%2Caps%2C388&sr=1-2">
                                    Order Now
                            </Button>
                        </ButtonContainer>
                    </ColumnOne>
                    <ColumnTwo>
                        <ImageContainer>
                            <Image src={spellTheAwakeningBook}/>
                        </ImageContainer>
                    </ColumnTwo>
          </Content>

        </HeroContainer>
        
    )
}

export default Hero
