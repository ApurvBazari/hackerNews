import React from 'react'

// import Button from '../../components/Button'

export default class HomePage extends React.Component {
  render() {
    console.log('props------>', this.props.data)
    return(
      <div>HomePage</div>
    )
  }
}