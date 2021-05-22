import React from 'react'
import {Container,Head,Title,P,Form,FormInput,Label,Input,InputMessage,ColumnOne,ColumnTwo,ImageContainer,ImageSvg,ContactInfo,InfoH,InfoP,ButtonContainer} from './ContactElements'
import svg from '../../images/contactSvg.svg'
import { Button } from '../reusableComponents/Button'


function Contact() {
    return (
       <Container>
           <ColumnOne>
                <Head>
                        <Title>
                            Let's Talk
                        </Title>
                        <P>
                            I’d love to hear from you! Please leave a message and I’ll reply as soon as I can. Make sure to supply your email address so I can respond.
                        </P>
                        <P>
                            To contact me, please fill out the form below.
                        </P>
                </Head>

                <Form>
                    <FormInput>
                        <Label>Your Name</Label>
                        <Input type="text"/>
                    </FormInput>
                    <FormInput>
                        <Label>Your Email</Label>
                        <Input type="text"/>
                    </FormInput>
                    <FormInput>
                        <Label>Your Message</Label>
                        <InputMessage name="message" id="message" defaultValue="Message" />
                    </FormInput>


                    <ButtonContainer>

                            <Button
                            as="button" 
                            type="submit" 
                            primary="true" 
                            round="true" 
                            big="true"  
                            css={`
                                height: 48px;
                                @media screen and(max-width: 768px){
                                    width:100%;
                                    min-width:350px;
                                }
                                @media screen and(max-width: 400px){
                                    width:100%;
                                    min-width:250px;
                                }
                            `}
                            >Send</Button>
                   </ButtonContainer>
                </Form>
            </ColumnOne>

            <ColumnTwo>
                  <ImageContainer>
                       <ImageSvg src={svg}/>
                  </ImageContainer>

                  <ContactInfo>
                        <InfoH>Reach me at</InfoH>
                          <InfoP><span>Email :</span> ripp@gmail.com</InfoP>
                          <InfoP><span>Phone :</span> 234-4324234</InfoP>
                  </ContactInfo>
            </ColumnTwo>
       </Container>
    )
}

export default Contact
