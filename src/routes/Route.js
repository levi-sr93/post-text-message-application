import {Route as ReactDOMRoute, Redirect} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth';
export default function Route({isPrivate=false, component: Component, ...rest}){

  const {user} = useAuth();

  return (
    <ReactDOMRoute {...rest} render={({location}) => {
      return isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{
          pathname: isPrivate ? '/' : '/feed',
          state: {from: location}}
        } />
      )
    }} />
      
  )
}