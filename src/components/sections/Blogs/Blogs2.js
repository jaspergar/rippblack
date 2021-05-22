import React from 'react'
import {Grid,CardImage,CardTitle,CardDescription,BlogContainer,BgImage,Content,Title,Description,CardContainer,Card,CardInfo} from './BlogsElements2'
import blogBg from '../../../images/blogBg.jpg'
import { Button } from '../../reusableComponents/Button'
import card1 from '../../../images/card1.jpg'
import card2 from '../../../images/card2.jpg'
import card3 from '../../../images/card3.jpg'
import {useStaticQuery,graphql} from 'gatsby'
const Blogs = () => {

    const data = useStaticQuery(graphql`
    query HomeSectionBlogBg {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["blogBg"]}}) {
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
       <BlogContainer>
                
                {/* { data.allFile.edges.map((image,key)=> (
                   <BgImage key={key} fluid={image.node.childImageSharp.fluid} />
                ))} */}
           
               <BgImage src={blogBg}/>
                 
                 <Content>
                     <Title>
                        My Blogs
                     </Title>
                     <Description>
                     Read my latest blog post and be updated about my books.
                     </Description>

                 <Grid>
                     <CardContainer>
                         <Card>
                         {/* <ImageContainer> */}
                                <CardImage src={card1}/>
                           {/* </ImageContainer> */}
                            
                            <CardInfo>
                                <CardTitle>Blog Date</CardTitle>
                                <CardDescription>This is a very long blog post title</CardDescription>
                                <Button primary="true" round="true">Read Blog</Button>
                            </CardInfo>
                         </Card>
                     </CardContainer>

                     <CardContainer>
                         <Card>
                         {/* <ImageContainer> */}
                                <CardImage src={card1}/>
                           {/* </ImageContainer> */}
                            
                            <CardInfo>
                                <CardTitle>Blog Date</CardTitle>
                                <CardDescription>This is a very long blog post title</CardDescription>
                                <Button primary="true" round="true">Read Blog</Button>
                            </CardInfo>
                         </Card>
                     </CardContainer>

                     <CardContainer>
                         <Card>
                         {/* <ImageContainer> */}
                                <CardImage src={card1}/>
                           {/* </ImageContainer> */}
                            
                            <CardInfo>
                                <CardTitle>Blog Date</CardTitle>
                                <CardDescription>This is a very long blog post title</CardDescription>
                                <Button primary="true" round="true">Read Blog</Button>
                            </CardInfo>
                         </Card>
                     </CardContainer>

                     <CardContainer>
                         <Card>
                         {/* <ImageContainer> */}
                                <CardImage src={card1}/>
                           {/* </ImageContainer> */}
                            
                            <CardInfo>
                                <CardTitle>Blog Date</CardTitle>
                                <CardDescription>This is a very long blog post title</CardDescription>
                                <Button primary="true" round="true">Read Blog</Button>
                            </CardInfo>
                         </Card>
                     </CardContainer>
                    
                 </Grid>


                 
                

                     <Button primary="true" round="true">See All Blogs</Button>
                 </Content>
         
       </BlogContainer>
    )
}

export default Blogs
