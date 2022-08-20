import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    background: #F0F0F6;
    .contentSkills {
    width: 220px;
  }
  ::-webkit-scrollbar {
  width: 1px;
  padding-left: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 20px transparent; 
  border-radius: 10px;
  opacity: 80%;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #FFB400; 
  border-radius: 10px;
  opacity: 80%;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #FFB400; 
  opacity: 80%;
}
  
    
  }
`