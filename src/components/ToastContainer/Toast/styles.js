import styled, {css} from 'styled-components';


const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #31b2b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `
}

export const Container = styled.div`
  width: 22rem;
  position: relative;
  padding: 1rem 2rem 1rem 1rem;
  box-shadow: 0.125rem 0.125rem 0.5rem rgba(0,0,0, 0.2);
  border-radius: 0.625rem;
  
  display: flex;

  & + div {
    margin-top: 0.5rem;
  }

  ${props => toastTypeVariations[props.type] || 'info'}

  > svg {
    margin: 0.25rem 1rem 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 0.25rem;
      font-size: 1rem;
      opacity: 0.8;
      line-height: 1.2rem;
    }
  }

  button {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit; 
  }
`;