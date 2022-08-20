import styled from "styled-components";
interface ProfileProps {
  showIsNav: boolean
}
export const Container = styled.div<ProfileProps>`
  width: 305px;
  height: 100%;
  background: ${(props) => props.showIsNav === false ? 'transparent' : '#FFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  flex-direction: column;

`
export const ButtonView = styled.button<ProfileProps>`
  width: 50px;
  display: ${(props) => props.showIsNav === true ? 'none' : 'flex'};
  right: 1rem;
  margin-right: 80%;
  border: none;
  background: transparent;
  color: #2B2B2B;
  cursor: pointer;
  transition: all 0.2s;
  &:hover{
    filter: brightness(0.9);
  }
`
export const ButtonClose = styled.button<ProfileProps>`
  width: 50px;
  display: ${(props) => props.showIsNav === false ? 'none' : 'flex'};
  right: 1rem;
  align-items: flex-end;
  justify-content: center;
  margin-left: 80%;
  border: none;
  background: transparent;
  color: #2B2B2B;
  cursor: pointer;
  transition: all 0.2s;
  &:hover{
    filter: brightness(0.9);
  }
`

export const Content = styled.div<ProfileProps>`
  width: 220px;
  height: 100%;
  display: ${(props) => props.showIsNav === false ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
 


`
export const ProfileContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 123.6%;
  color: #2B2B2B;
  h4 {
    margin-top: 15px;
  }
  span {

    font-weight: 400;
    font-size: 15px;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      border: 3px solid #FFB400;
    }
    .profile-status {
      width: 16px;
      height: 16px;
      background: #7EB942;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
      border-radius: 50%;
      margin-top: -1rem;
      margin-left: 3rem;
      border: 1px solid #fff;
    }
  }

`
export const Midias = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

      .midias-item {
        text-decoration: none;
        color: #2B2B2B;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background: #FFB400;
        border-radius: 50%;
        font-weight: bold;
      }
`
export const Infos = styled.div`
  margin-top:15px;
  padding-top: 25px;
  width: 100%;
  border-top: 1.5px solid #F0F0F6;
  border-bottom: 1.5px solid #F0F0F6;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-transform: capitalize;
    font-feature-settings: 'calt' off, 'kern' off;
    color: #2B2B2B;

    .info-yellow {
      background: #FFB400;
    }
  }
  `

export const Languages = styled.div`
  margin-bottom: 25px;
  width: 100%;
  border-bottom: 1.5px solid #F0F0F6;
  display: flex;
  flex-direction: column;
  

    h4{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 123.6%;
      color: #2B2B2B;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    section{
      display: flex;
      flex-direction: column;
    }

    section > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    section > div > span {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      text-transform: capitalize;
      font-feature-settings: 'calt' off, 'kern' off;
      color: #767676;
    }
    progress {
    display:block;
    -webkit-appearance: none;
    width: 100%;
    }

    progress::-webkit-progress-bar {
        background: white;
        border-radius: 30px;
        border: 0.5px solid #FFB400;
        height: 4px;
    }
    progress::-moz-progress-bar {  
        background: white;
        width: 220px;
        height: 2px;
        border: 0.5px solid #FFB400;
        border-radius: 30px;

    }
    progress::-webkit-progress-value {
    background: #FFB400;
    background: #FFB400;
    border-radius: 30px;  
    height: 2px;
    }
`

export const Skills = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: auto;


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
 
  h4{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 123.6%;
      color: #2B2B2B;
      margin-bottom: 15px;
    }
    progress {
    display:block;
    -webkit-appearance: none;
    width: 100%;
    }

    progress::-webkit-progress-bar {
        background: white;
        border-radius: 30px;
        border: 0.5px solid #FFB400;
        height: 4px;
    }
    progress::-moz-progress-bar {  
        background: white;
        width: 220px;
        height: 2px;
        border: 0.5px solid #FFB400;
        border-radius: 30px;

    }
    progress::-webkit-progress-value {
    background: #FFB400;
    background: #FFB400;
    border-radius: 30px;  
    height: 2px;
    }
    section{
      display: flex;
      flex-direction: column;
      
    }

    section > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    section > div > span {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      text-transform: capitalize;
      font-feature-settings: 'calt' off, 'kern' off;
      color: #767676;
    }
    progress {
    display:block;
    -webkit-appearance: none;
    width: 100%;
    }
`
export const ExtraSkills = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #F0F0F6;
  border-top: 1.5px solid #F0F0F6;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  h4{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 123.6%;
      color: #2B2B2B;
      margin-bottom: 15px;
    }
    div {
      display: flex;
      align-items: center;
      gap: 15px
    }
    div > span {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      text-transform: capitalize;
      font-feature-settings: 'calt' off, 'kern' off;
      color: #767676;
    }
`
export const Section = styled.div`
  width: 105%;
  height: 100%;
  border-bottom: 1.5px solid #F0F0F6;
  display: flex;
  flex-direction: column;
 
  
`
export const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #FFB400;
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #2B2B2B;

  border: none;
  cursor: pointer;

  transition: all 0.2s;

  &:hover{
    filter: brightness(0.9);
  }
  margin-bottom: 3rem;
`