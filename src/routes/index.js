import {
  Switch} from 'react-router-dom'

// import Route from './Route'

import SignIn from '../pages/SignIn'
import Feed from '../pages/Feed'
import Route from './Route'

export default function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route isPrivate path="/feed" component={Feed}/>

    </Switch>
  )
}