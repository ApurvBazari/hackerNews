import React from 'react'

import { Container, Title } from './style'

const Header = (props) => {
  return(
    <Container>
      {props.data.map((item, i) => <Title isLast={i === props.data.length - 1}>{item}</Title>)}
    </Container>
  )
}

export default Header
