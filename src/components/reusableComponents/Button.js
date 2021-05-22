import styled from "styled-components"
import {Link} from "gatsby"


export const primaryC =  "#F1001D"
export const secondaryC =  "#E08C00"
export const subcolor =  "#F26A2E";
export const gradient = "linear-gradient(to right, rgb(26, 42, 108), rgb(178, 31, 31), rgb(253, 187, 45))";

export const Button = styled(Link)`
  background: ${({primary}) => (primary ? primaryC :secondaryC  )};
  white-space: nowrap;
  padding: ${({big}) => (big ? "14px 40px" : "13px 32px")};
  color:#fff;
  font-size: ${({big}) => (big ? "20px" : "14px")};
  outline:none;
  border:none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({round}) => (round ? "50px" : "none")};
  
  &:hover {
    background: ${({primary}) => (primary ? secondaryC:primaryC)};
    transform: translateY(-3px);
  }
`