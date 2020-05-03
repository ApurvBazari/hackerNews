import React from 'react'

import { Container } from './style'

const Image = (props) => {
  return(
    <Container src={props.imgSrc} />
  )
}

export default Image
