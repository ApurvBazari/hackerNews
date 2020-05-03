import React from 'react'

import { Container, Comments, VoteCount, UpVote, News, NewsDetails, Url, Author, Hide } from './style'

const NewsCol = (props) => {
  console.log(props.showUrl)
  return(
    <Container isEven={props.isEven}>
      <Comments>{props.commentsNum}</Comments>
      <VoteCount>{props.voteCount}</VoteCount>
      <UpVote>^</UpVote>
      <News>
        {props.title}
        <NewsDetails>
          ({!!props.showUrl ? (
            <Url target="_blank" href={props.fullUrl}>
              {props.showUrl}
            </Url>
          ): ''}) by <Author>{props.author}</Author> 5 hrs ago
          <Hide>[ hide ]</Hide>
        </NewsDetails>
      </News>
    </Container>
  )
}

export default NewsCol;