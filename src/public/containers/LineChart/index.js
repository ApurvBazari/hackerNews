import React from 'react'
import LineChart from 'react-svg-line-chart'

export default class Chart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }

  labelsFormatX = x => {
    const { data } = this.state
    const itemX = data.find(item => item.x === x)
    return itemX.label
  }

  render(){
    const { data } = this.state
    return(
      <LineChart
        data={data}
        labelsFormatX={(x) => this.labelsFormatX(x)}
        labelsStepX={1}
        pathWidth={2}
      />
    )
  }
}