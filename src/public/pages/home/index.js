import React from 'react'

import Header from '../../components/Header';
import Button from '../../components/Button'
import Line from '../../components/Line';

import NewsCol from '../../containers/NewsCol';
import LineChart from '../../containers/LineChart';

import { Table, Buttons, Container } from './style'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }
  
  onPrevClick = () => {
    console.log('clicked prev')
  }

  onNextClick = () => {
    console.log('Next clicked')
  }

  getChartData = (data) => {
    const chartData = [];
    data.forEach((news, i) => chartData.push({x: i+1, y: Math.floor(news.points), label: news.objectID}))
    return chartData;
  }

  render() {
    console.log('props------>', this.props.data.hits[0])
    const { pageNum } = this.props;
    const { data } = this.state;
    const chartData = this.getChartData(data.hits);
    console.log('chartData----->', chartData)
    return(
      <Container>
        <Table>
          <Header data={['Comments', 'Vote Count', 'UpVote', 'News Details']} />
          {data && data.hits && data.hits.map((news, i) =>
            <NewsCol
              key={i}
              isEven={i===0 || i%2===0}
              data={news}
              title={news.title}
              commentsNum={news.num_comments}
              voteCount={news.points}
              author={news.author}
              fullUrl={news.url}
              showUrl={news.url && news.url.split('/')[2]}
            />
          )}
        </Table>
        <Buttons>
          {pageNum !== 1 && (<Button onClick={this.onPrevClick}>Previous</Button>)}
          {pageNum !== 1 && (<Line />)}
          <Button onClick={this.onNextClick}>Next</Button>
        </Buttons>
        <LineChart data={chartData} />
      </Container>
    )
  }
}