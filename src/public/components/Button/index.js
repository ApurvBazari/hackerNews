import React from 'react'

import {Container} from './style'

const Button = (props) => {
  return(
    <Container>
      {props.children}
    </Container>
  )
}

export default Button;