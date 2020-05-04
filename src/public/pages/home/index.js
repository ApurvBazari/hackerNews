import React from 'react'

import Header from '../../components/Header';
import Button from '../../components/Button'
import Line from '../../components/Line';

import NewsCol from '../../containers/NewsCol';
import LineChart from '../../containers/LineChart';

import fetch from 'node-fetch'

import { Table, Buttons, Container } from './style'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || window.store,
      pageNum: props.pageNum || window.pageNum
    }
  }
  
  onPrevClick = () => {
    const { pageNum } = this.state;
    fetch(`https://hn.algolia.com/api/v1/search?page=${pageNum - 1}`)
      .then(res => res.json())
      .then(data => {
        window.history.pushState(data, '', `?page=${pageNum - 1}`);
        this.setState({
          data: data,
          pageNum: pageNum - 1,
        })
      })
  }

  onNextClick = () => {
    const { pageNum } = this.state;
    fetch(`https://hn.algolia.com/api/v1/search?page=${pageNum + 1}`)
      .then(res => res.json())
      .then(data => {
        window.history.pushState(data, '', `?page=${pageNum + 1}`);
        this.setState({
          data: data,
          pageNum: pageNum + 1,
        })
      })
  }

  getChartData = (data) => {
    const chartData = [];
    data.forEach((news, i) => chartData.push({x: i+1, y: news.points, label: news.objectID}))
    return chartData;
  }

  render() {
    const { data, pageNum } = this.state;
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