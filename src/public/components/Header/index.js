import React from 'react'

import { Container } from './style'

const Header = (props) => {
  return(
    <Container>
      {props.data.map(item => item)}
    </Container>
  )
}

export default Header
