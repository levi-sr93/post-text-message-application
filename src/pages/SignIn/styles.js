import styled, {keyframes} from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media screen and (max-width: 64rem){
    & {
      width: 90%;
      margin: 0 auto;
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 43.75rem;

   
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 2s;

  form {
    margin: 5rem 0;
    width: 21.25rem;
    text-align: center;
  }

  h1 {
    display: none;
  }

  @media screen and (max-width: 64rem){
    & h1 {
      display: flex;
      margin-top: 2rem;

      strong {
        color: #F98585;
        margin-left: 0.3rem;
      }
    }
  }
  
`;

export const BackgroundImage = styled.section`
  flex: 1;
  width: 100%;
  height: 100vh;
  background-color: #A5D0F9;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  img {
    height: auto;
    width: 15rem;
    margin: 0 auto;
  }
  
  h1 {
    margin: 1rem 0 ;
    font-size: 4rem;

  }
  strong {
    color: #F98585;
    font-weight: bold;
    font-size: 4.5rem;
  }

  @media screen and (max-width: 64rem){
    & {
      display: none;
    }
  }
`