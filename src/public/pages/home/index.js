import React from 'react'

import Header from '../../components/Header'

export default class HomePage extends React.Component {
  render() {
    console.log('props------>', this.props.data)
    return(
      <div>HomePage<div><Header data={['vote', 'count', 'header']}/></div></div>
    )
  }
}