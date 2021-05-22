import React from 'react'
import rhonda from '../../../images/rhonda.jpg'
import {Container,Wrapper,ImageContainer,RhondaImage,Pwrapper,P} from './BioElements'

function Bio() {
    return (
        <Container>
          <Wrapper>
            <ImageContainer>
                 <RhondaImage src={rhonda}/>
            </ImageContainer>
            <P>Rhonda Ripp was born in Kansas City, Missouri to two community-college professors—her mother taught reading; her father, film. Thus she spent an inordinate amount of her youth nosing through books and watching movies. She has happy memories of having A Wrinkle in Time pried from her hands at the dinner table, and also of seeing Alien, Psycho and Bonnie and Clyde at a questionable age (like, seven). It was a good childhood.</P>
          </Wrapper>
          <Pwrapper>
            <P>In high-school, she worked strange jobs that required her to do things like wrap and unwrap hams, or dress up as a giant yogurt cone. A yogurt cone who wore a tuxedo. Why the tuxedo? It was a question that would haunt her for years.</P>
            <P>For college, she headed to the University of Kansas (go Jayhawks), where she received her undergraduate degrees in English and journalism.</P>
            <P>After a two-year stint writing about human resources for a trade magazine in California, Flynn moved to Chicago. There she earned her master’s degree in journalism from Northwestern University and discovered that she was way too wimpy to make it as a crime reporter.</P>
            <P>On the other hand, she was a movie geek with a journalism degree—so she moved to New York City and joined Entertainment Weekly magazine, where she wrote happily for 10 years, visiting film sets around the world (to New Zealand for The Lord of the Rings, to Prague for The Brothers Grimm, to somewhere off the highway in Florida for Jackass: The Movie). During her last four years at EW, Flynn was the TV critic (all-time best TV show: The Wire).</P>
            <P>Flynn’s 2006 debut novel, the literary mystery Sharp Objects, was an Edgar Award finalist and the winner of two of Britain’s Dagger Awards—the first book ever to win multiple Daggers in one year. The book is now an HBO® limited series starring Amy Adams.</P>
          </Pwrapper>
        </Container>
    )
}

export default Bio
