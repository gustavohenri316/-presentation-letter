import styled from "styled-components";

export const Container = styled.div`
  width: 108px;
  height: 100vh;
  background: #FAFAFA;
  box-shadow: 4px 0px 10px rgba(47, 122, 249, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;

  @media (max-width: 720px) {
    display: flex;
    bottom: 0;
    width: 100vw;
    height: 90px;
    }
`
interface ContentProps{
  themeStyles: string
}
export const Content = styled.div<ContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 177px;
  flex-direction: column;

  @media (max-width: 620px) {
    gap: 80px;
    width: 580px;
    .nav-items{
      gap: 25px;
    }
    }
  @media (max-width: 520px) {
    justify-content: center;
    align-items: center;
    .theme{
      display: none;
    }
    .nav-items section{
      display: flex;
      align-items: center;
      gap: 10px;
    }
    a {
      width: 30px;
      height: 30px;
    }
    }
  
  @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    flex-direction: initial;
    align-items: center;
    bottom: 0;
    }

  .Home{
    background: ${(props) => props.themeStyles === 'Home' ? '#FFB400' : '#F0F0F6'};
    color: #000;
  }
  .Projects{
    background: ${({themeStyles}) => themeStyles === 'Projects' ? '#FFB400' : '#F0F0F6'};
    color: #000;
  }
  .Student{
    background: ${({themeStyles}) => themeStyles === 'Student' ? '#FFB400' : '#F0F0F6'};
    color: #000;
  }
  .Job{
    background: ${({themeStyles}) => themeStyles === 'Job' ? '#FFB400' : '#F0F0F6'};
    color: #000;
  }
  .Contact{
    background: ${({themeStyles}) => themeStyles === 'Contact' ? '#FFB400' : '#F0F0F6'};
    color: #000;
  }

  .content-home{
    display: ${({themeStyles}) => themeStyles === 'Home' ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content-projects{
    display: ${({themeStyles}) => themeStyles === 'Projects' ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content-student{
    display: ${({themeStyles}) => themeStyles === 'Student' ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content-job{
    display: ${({themeStyles}) => themeStyles === 'Job' ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content-contact{
    display: ${({themeStyles}) => themeStyles === 'Contact' ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .nav-items{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    bottom: 0;
    gap: 43px;

    @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    flex-direction: initial;
    align-items: center;
    bottom: 0;
    
    .nav-items {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    }
  }
  .nav-items a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    text-decoration: none;
    border-radius: 50%;
    cursor: pointer;
  }
  .nav-items section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .info{
    width: 70px;
    height: 24px;
    background: #2B2B2B;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
  }
  .triangulo{
    display: inline-block;
    
    width: 18px;
    height: 18px;
    background: transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #2B2B2B;
  }
`