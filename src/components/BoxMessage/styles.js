import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({isAuthor}) => isAuthor ? '#4e5099' : '#1e1f3a'} ;
  color: #fff;
  margin: 1rem auto;

  width: 90%;
  max-width: 1120px;
  height: fit-content;
  min-height: 6rem;
  padding: 2rem;
  border-radius: 2rem;
`;

export const MessageHeader = styled.header`
display: flex;
flex-direction: column;

width: 100%;

  h3 {
    font-weight: bold;
    background: #f98585;
    border-radius: 0.3rem;
    align-self: center;
    margin: 1rem auto;
    padding: 0.5rem;

  }

  span {
    font-size: 1rem;
  }
`

export const MessageBody = styled.div`
  

  p {
    text-align: justify;
    font-weight: bold;
  }

  button {
    background: transparent;
    border: 0;
    margin: 1rem;
    font-weight: bold;
    color: #f98585;

  }
`