import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import {Container} from './styles'
const Loading = () => {
  return (
    <Container>
      <BeatLoader color={'#f00'} loading={true} size={100}/>
    </Container>
  )
}

export default Loading
