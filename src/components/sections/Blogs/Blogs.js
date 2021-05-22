import React from 'react'
import {CardImage,CardTitle,CardDescription,BlogContainer,BgImage,Content,Title,Description,CardContainer,Card,ImageContainer,CardInfo} from './BlogsElements'
import blogBg from '../../../images/blogBg.jpg'
import { Button } from '../../reusableComponents/Button'
import card1 from '../../../images/card1.jpg'
import card2 from '../../../images/card2.jpg'
import card3 from '../../../images/card3.jpg'
const Blogs = () => {
    return (
       <BlogContainer>
                
                   {/* <BgImage src={blogBg}/> */}
           
                 <Content>
                     <Title>
                        My Blogs
                     </Title>
                     <Description>
                     Read my latest blog post and be updated about my books.
                     </Description>
                     <CardContainer>
                         <Card>
                         {/* <ImageContainer> */}
                                <CardImage src={card1}/>
                           {/* </ImageContainer> */}
                            
                            <CardInfo>
                                <CardTitle>Blog Date</CardTitle>
                                <CardDescription>This is a very long blog post title</CardDescription>
                                <Button primary="true" round="true"
                                css={`
                                 position:absolute;
                                 bottom:10px;
                                 display:block;
                                `}
                                >Read Blog</Button>
                            </CardInfo>
                         </Card>

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
                     <Button primary="true" round="true">See All Blogs</Button>
                 </Content>
         
       </BlogContainer>
    )
}

export default Blogs
