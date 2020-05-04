import React from 'react'

import Image from '../../components/Image'
import UpIcon from '../../images/arrow_up.svg'

import { Container, Comments, VoteCount, UpVote, News, NewsDetails, Url, Author, Hide } from './style'

const NewsCol = (props) => {
  return(
    <Container isEven={props.isEven}>
      <Comments>{props.commentsNum}</Comments>
      <VoteCount>{props.voteCount}</VoteCount>
      <UpVote onClick={() => props.onVote(props.id)}>
        <Image imgSrc={UpIcon} />
      </UpVote>
      <News>
        {props.title}
        <NewsDetails>
          ({!!props.showUrl ? (
            <Url target="_blank" href={props.fullUrl}>
              {props.showUrl}
            </Url>
          ): ''}) by <Author>{props.author}</Author> 5 hrs ago
          <Hide onClick={() => props.onHide(props.id)}>[ hide ]</Hide>
        </NewsDetails>
      </News>
    </Container>
  )
}

export default NewsCol;