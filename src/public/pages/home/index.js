import React from 'react'

import Header from '../../components/Header';
import Button from '../../components/Button'
import Line from '../../components/Line';

import NewsCol from '../../containers/NewsCol';

import { Table, Buttons } from './style'

export default class HomePage extends React.Component {
  render() {
    console.log('props------>', this.props.data.hits[8])
    const { data } = this.props
    return(
      <div>
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
          <Buttons>
            <Button>Previous</Button>
            <Line />
            <Button>Next</Button>
          </Buttons>
        </Table>
      </div>
    )
  }
}