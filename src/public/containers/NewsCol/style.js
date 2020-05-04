import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 25px;
  line-height: 25px;
  background-color: ${props => props.isEven ? '#E5E6E0' : '#F5F6F0'};
`

export const Url = styled.a`
  cursor: pointer;
  color: darkgray;
`;

export const Hide = styled.div`
  color: black;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Author = styled.div`
  color: black;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
`;

export const NewsDetails = styled.div`
  margin-left: 5px;
  display: flex;
  font-size: 12px;
  color: darkgray;
`;

export const News = styled.div`
  display: flex;
`;

export const UpVote = styled.div`
  width: 80px;
  text-align: center;
  margin-right: 15px;
`;

export const VoteCount = styled.div`
  width: 80px;
  text-align: center;
  margin-right: 15px;
`;

export const Comments = styled.div`
  width: 80px;
  text-align: center;
  margin-right: 15px;
`;