import {createContext, useState} from 'react';
import { useHistory } from 'react-router';
import authService from '../services/AuthService';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const history = useHistory();
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@message-app:token');
    const username = localStorage.getItem('@message-app:username')

    if(token && username) {
      return {
        token, 
        username: JSON.parse(username)
      }
    }
    return {}
  });
  

  async function signIn(username, password){
    try {
      const {data} = await authService.signIn(username, password)
      let token = data.authToken;
      localStorage.setItem('@message-app:token', token)
      localStorage.setItem('@message-app:username', JSON.stringify(username))
      setData({token, username})
      history.push('/feed')
    } catch (error) {
      console.log('ERROR CONTEXT', error)
      throw new Error(error)
      
    }
  }

  function logout(){
    authService.signOut()
    setData({});
    history.push('/');
  }

  return (
    <AuthContext.Provider value={{user: data.username, userToken: data.token, signIn, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

