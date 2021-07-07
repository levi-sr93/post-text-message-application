import styled, {css} from 'styled-components';

export const Container = styled.div`
  border-radius: 0.625rem;
  border: 2px solid #6887a5;
  padding: 1rem;
  width: 100%;
  background-color: #A5D0F9;
  color: #666360;
  
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isUsernameErrored &&
    css`
      color: #ff0202;
      border-color: #ff0202;
    `}

    ${(props) =>
    props.isPasswordErrored &&
    css`
      color: #ff0202;
      border-color: #ff0202;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #6887a5;
    font-size: 1.2rem;
    font-weight: bold;

    &::placeholder {
      color: #6887a5;
      font-weight: bold;
    }
  }

  svg {
    margin-right: 1rem;
  }
`;