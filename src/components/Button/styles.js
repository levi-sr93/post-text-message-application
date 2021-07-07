import styled from 'styled-components';

export const Container = styled.button`
  background-color: #f98585;
  height: 3.5rem;
  border-radius: 0.625rem;
  border: 0;
  padding: 0 1rem;
  color: #fff;
  width: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  cursor: ${(props) => 
    props.disabled ? 'not-allowed' : 'pointer'
  };

  .spinner {
    animation: spin 1s linear infinite;

    @keyframes spin {
    to {
      transform: rotate(360deg);
    }
}

  }
`;