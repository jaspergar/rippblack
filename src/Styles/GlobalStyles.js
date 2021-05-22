import {createGlobalStyle} from 'styled-components'

//global style
export const GlobalStyle = createGlobalStyle`

   :root{
      --primary-color: #F1001D;
      --secondary-color: #E08C00;
   }
  

  *{
      font-family: 'Philosopher';
      margin:0;
      padding : 0;
      box-sizing:border-box;
      letter-spacing:1px;
      ${'' /* font-size:900; */}
      
      ${'' /* overflow-x:hidden; */}
  }
 


`