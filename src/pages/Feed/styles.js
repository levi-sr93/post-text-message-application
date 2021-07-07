import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #ebf7ff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.main`
  width: 90vw;
  max-width: 70rem;
  margin: 5rem auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 2rem;
    width: 100%;
    
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;

    strong {
      font-weight: bold;
      color: #f98585;

    }
    
  }

  h1 {
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    position: relative;
    align-self: center;
    text-align: center;

    &::after {
      content: "";
      height: 0.5rem;
      width: 14rem;
      background: #f98585;
      border-radius: 0.25rem 0.25rem 0 0;
      position: absolute;
      margin-top: 3rem;
    }
  }
`;

export const NavSection = styled.div`
  display: flex;
  width: 100%;
  button {
    background: none;
    border: 0;
    color: #f98585;
    font-weight: bold;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.5;
    }

  }
  
`

export const CreateMessageSection = styled.div`
  
  button {
    background: none;
    border: 0;
    color: #f98585;
    font-weight: bold;
    font-size: 1.4rem;
    margin: 2rem auto;
  }

  textarea {
    width: 100%;
    resize: none;
    border-radius: 1rem;
    padding: 0.9rem
  }
`

export const MessagesSection = styled.section`
  display: flex;

  flex-direction: column;
  overflow: auto;
  justify-content: center;
  align-items: center;
  
`;

export const NoMessages = styled.p`
  font-size: 3rem;
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`