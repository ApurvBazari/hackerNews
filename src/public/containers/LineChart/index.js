import React from 'react'
import LineChart from 'react-svg-line-chart'

export default class Chart extends React.Component{
  labelsFormatX = x => {
    const { data } = this.props
    const itemX = data.find(item => item.x === x)
    return itemX.label
  }

  render(){
    const { data } = this.props
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