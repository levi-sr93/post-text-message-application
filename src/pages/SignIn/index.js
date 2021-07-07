import {useState} from 'react'
import { FiUser, FiLock } from "react-icons/fi";

import { useAuth } from '../../hooks/useAuth';

import mainImage from '../../assets/images/heroImage.svg'
import logoImage from '../../assets/images/logo.svg'

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Content, AnimatedContainer, BackgroundImage} from './styles'
import { useToast } from '../../hooks/useToast';

function SignIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameErrored, setIsUsernameErrored] = useState(false);
  const [isPasswordErrored, setIsPasswordErrored] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  

  const {signIn} = useAuth();
  const {addToast} = useToast();

  async function handleSubmit(){
    if(username.length === 0) {
      setIsUsernameErrored(true);
      addToast({
        type: 'error',
        title: 'Username is required',
        description: 'Please type your username in the input'
      });
      return
    }

    if(password.length === 0) {
      setIsPasswordErrored(true);
      addToast({
        type: 'error',
        title: 'Password is required',
        description: 'Please type your password in the input'
      });
      return 
    }

    setIsLoading(true);
    await signIn(
      username,
      password
    ).then(response => {
      setIsLoading(false)
    }).catch(error => {
      setIsLoading(false)
      addToast({
        type: 'error',
        title: 'Login failed',
        description: 'Something went wrong during the login'
      });
    }).finally(() => {
      setIsLoading(false)
    })
      
  }

  function handleUsernameInputFocus(){
    setIsUsernameErrored(false);
  }

  function handlePasswordInputFocus(){
    setIsPasswordErrored(false);
  }

  return (
    <Container>
      <Content>
        <AnimatedContainer>
        <img src={logoImage} alt="Text Message App" />
        <h1>Text Message <strong> App</strong></h1>
        <form>
          <Input
            placeholder="Username"
            icon={FiUser}
            value={username}
            onChange={e => setUsername(e.target.value)}
            isUsernameErrored={isUsernameErrored}
            onFocus={handleUsernameInputFocus}
          />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            isPasswordErrored={isPasswordErrored}
            onFocus={handlePasswordInputFocus}
          />
        </form>
        <Button onClick={handleSubmit} loading={isLoading}>
          Login
        </Button>

        </AnimatedContainer>
      </Content>
      <BackgroundImage>

        <h2>Share your ideas</h2>
        <h1>Text Message</h1> 
        <img src={mainImage} alt="People Talking with the app" />
        <strong>App</strong>
      </BackgroundImage>
    </Container>
  )
}

export default SignIn;
