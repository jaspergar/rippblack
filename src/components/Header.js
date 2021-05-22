
import React,{useEffect, useState} from "react"
import styled from "styled-components"
import {Link} from 'gatsby'
import {FaBars} from '@react-icons/all-files/fa/FaBars'
import {FaTimes} from '@react-icons/all-files/fa/FaTimes'
import { Button } from "./reusableComponents/Button"

const Header = () => {
    const [clicked , setClicked] = useState(false);

    const openNav = (e) =>{
        e.preventDefault()
        setClicked(prevState => !prevState)
    }
    
    return (
       <Nav>
           <NavLogo to="/">

               <h1>RIPP BLACK</h1>
               
           </NavLogo>
           <MenuIcon onClick={openNav} navMenu={clicked}>
          { clicked ?  <BarsTimes/> : <Bars />} 
           </MenuIcon>
                <NavMenu  navMenu={clicked}>
                        <NavLinks to="/">
                            Home
                        </NavLinks>
                        <NavLinks to="/blog">
                            Blog
                        </NavLinks>
                        <NavLinks to="/bio">
                            Bio
                        </NavLinks>
                        <NavLinks to="/contact">
                            Contact
                        </NavLinks>
                </NavMenu>
                <NavBtn> <Button primary="true" round="true" to="/ContactPage"><span css={`font-weiht:300;font-size: clamp(1rem, 5vw, 1rem);`}>My Books</span></Button></NavBtn>
       </Nav>
    )
}

export default Header

const Nav = styled.div`
${'' /* background: ${({scrollNav}) => (scrollNav ? '#111' : 'transparent')}; */}
background:transparent;
width:100%;
display:flex;
justify-content:space-between;
${'' /* padding: ${({scrollNav}) => (scrollNav ? '0 calc((100vw - 1200px) / 2)' : '1rem calc((100vw - 1200px) / 2)')}; */}
padding:0 calc((100vw - 1200px) / 2);
${'' /* position:sticky;
top:0;
z-index:5; */}
${'' /* position:relative; */}
${'' /* z-index:5; */}
${'' /* transition: 0.3s ease-in-out; */}
@media screen and (max-width: 768px){
    padding:1rem calc((100vw - 1200px) / 2);
}

`

const NavLogo = styled(Link)`
 display:flex;
  text-decoration:none;
  ${'' /* padding: .5rem 1rem; */}
  cursor: pointer;
${'' /* background:red; */}
 align-items:center;
 justify-content:center;
 ${'' /* margin-left:24px; */}
 
 h1{
     color: #111;
 }
 @media screen and (max-width: 1274px){
    margin-left:24px;
 };
`

const Logo = styled.img`
 height:80px;
 width:180px;
 @media screen and (max-width: 807px){
     width:120px;
     height:60px
 };
`

const MenuIcon = styled.div`
  
  display:none;

  @media screen and (max-width: 768px){
    ${'' /* display: block;
    display:flex;
  align-items:center; */}
  z-index: 11;
     display:block;
     position:fixed;
     ${'' /* position: ${({navMenu}) => (navMenu ? "fixed" :  "absolute")};   */}
     top: 5%;
     right: 4%;
     ${'' /* transform: ${({scrollNav}) => (scrollNav ? 'translate(-70%,50%)' : 'translate(-70%,90%)')} ; */}
     transform:'translate(-50%,90%)';
     transition: .3s;
     font-size: 1.8rem;
     cursor:pointer;
  }
`

const Bars = styled(FaBars)`
 color:var(--primary-color); 
`
const BarsTimes = styled(FaTimes)`
 color:#fff; 
`

const NavMenu = styled.div`
display:flex;
justify-content:center;
align-items:center;


@media screen and (max-width: 768px){
       position:fixed;
       justify-content:center;
       overflow:hidden;
       flex-direction:column;
       width:50%;
       height:100vh;
       top:0;
       right: ${({navMenu}) => (navMenu ? "0" :  "-100%")};
       transition: 0.3s ease-in;
       ${'' /* transform: ${({navMenu}) => (navMenu ? "translateX(0)" :  "translateX(100%)")};     */}
       background: var(--primary-color);
       z-index:10;
       margin-right:0;
   }
`

const NavBtn = styled.div`
${'' /* overflow:hidden; */}
 display: flex;
 align-items:center;
 @media screen and (max-width: 1274px){
    margin-right:24px;
 }


  @media screen and (max-width: 768px){
      display: none;
  }
`

const NavLinks = styled(Link)`
font-weight:400;
color: ${({scrollNav}) => (scrollNav ? 'white' : '#111')};
  display:flex;
  align-items:center;
  text-decoration:none;
  padding: 0 1rem;
  height : 80px;
  transition: 0.1s ease-in-out !important;
  
  
  cursor: pointer;
   ${'' /* background:pink; */}
   
  &:hover{
    color: var(--secondary-color);
  }

  &.active {
    border-bottom: 3px solid var(--secondary-color);
  }
   @media screen and (max-width: 768px){
      color: #fff;
      justify-content:center;
      cursor:pointer;
    &:hover{
      color: #fff;
      ${'' /* background: var(--secondary-color); */}
      font-size: 1.5rem;
      transform: translateY(-1px);
      
   }
   
`


