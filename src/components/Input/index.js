import {Container} from './styles';

const Input = ({icon: Icon, isPasswordErrored, isUsernameErrored, ...rest}) => {
  return (
    <Container
       isUsernameErrored={isUsernameErrored}
       isPasswordErrored={isPasswordErrored}
    >
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}

export default Input;