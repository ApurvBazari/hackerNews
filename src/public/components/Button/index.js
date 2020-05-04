import React from 'react'

import {Container} from './style'

const Button = (props) => {
  return(
    <Container onClick={props.onClick}>
      {props.children}
    </Container>
  )
}

export default Button;