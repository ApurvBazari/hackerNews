/** Absolute imports here */
import React from 'react'
import fetch from 'node-fetch'

/** Components imports here */
import Header from '../../components/Header';
import Button from '../../components/Button'
import Line from '../../components/Line';

/** Containers Imports here */
import NewsCol from '../../containers/NewsCol';
import LineChart from '../../containers/LineChart';

/** Styles imports here */
import { Table, Buttons, Container } from './style'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data ? props.data.hits : window.store,
      pageNum: props.pageNum || window.pageNum,
      initialClientRender: true
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

  hideNews = id => {
    const { data } = this.state;
    const newData = data.filter(item => item.objectID !== id)
    const storageIds = JSON.parse(localStorage.getItem('hideNewsIds'))
    if(storageIds) {
      if(storageIds.indexOf(id) < 0) {
        storageIds.push(id)
        localStorage.setItem('hideNewsIds', JSON.stringify(storageIds))
      }
    } else {
      localStorage.setItem('hideNewsIds', JSON.stringify([id]))
    }
    this.setState({
      data: newData,
      initialClientRender: false
    })
  }

  onVote = id => {
    const { data } = this.state;
    const voteIds = JSON.parse(localStorage.getItem('voteNewsIds'))
    let newData = [];
    data.forEach(news => {
      if(news.objectID === id) {
        news.points++
      }
      newData.push(news)
    })
    if(voteIds) {
      let flag = true
      voteIds.forEach(vote => {
        if(Object.keys(vote)[0] === id) {
          vote[Object.keys(vote)[0]]++
          flag = false
        }
      })
      if(flag) {
        voteIds.push({[id]: 1})
      }
      localStorage.setItem('voteNewsIds', JSON.stringify(voteIds))
    } else {
      localStorage.setItem('voteNewsIds', JSON.stringify([{[id]: 1}]))
    }
    this.setState({
      data: newData,
      initialClientRender: false
    })
  }

  getDataWithLocal = () => {
    const { data, initialClientRender } = this.state;
    const hideIds = JSON.parse(localStorage.getItem('hideNewsIds'));
    const voteIds = JSON.parse(localStorage.getItem('voteNewsIds'))
    const updatedData = data;
    initialClientRender && voteIds && voteIds.forEach(vote => {
      updatedData.forEach((news, i) => {
        if(Object.keys(vote)[0] === news.objectID) {
          news.points = news.points + vote[Object.keys(vote)[0]]
        }
      })
    })
    initialClientRender && hideIds && hideIds.forEach(id => {
      updatedData.forEach((news, i) => {
        if(id === news.objectID) {
          updatedData.splice(i,1)
        }
      })
    })
    return updatedData
  }

  render() {
    const { pageNum } = this.state;
    const data = typeof window !== 'undefined' ? this.getDataWithLocal() : this.state.data
    const chartData = typeof window !== 'undefined' ? this.getChartData(data) : null;
    return(
      <Container>
        <Table>
          <Header data={['Comments', 'Vote Count', 'UpVote', 'News Details']} />
          {data && data.map((news, i) =>
            <NewsCol
              key={i}
              id={news.objectID}
              isEven={i===0 || i%2===0}
              data={news}
              title={news.title}
              commentsNum={news.num_comments}
              voteCount={news.points}
              author={news.author}
              fullUrl={news.url}
              showUrl={news.url && news.url.split('/')[2]}
              onHide={this.hideNews}
              onVote={this.onVote}
            />
          )}
        </Table>
        <Buttons>
          {pageNum !== 1 && (<Button onClick={this.onPrevClick}>Previous</Button>)}
          {pageNum !== 1 && (<Line />)}
          <Button onClick={this.onNextClick}>Next</Button>
        </Buttons>
        {chartData && <LineChart data={chartData} />}
      </Container>
    )
  }
}