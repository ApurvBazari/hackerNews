import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #FE6502;
  height: 30px;
`

export const Title = styled.div`
  color: white;
  font-weight: bold;
  line-height: 30px;
  margin-right: 15px;
  width: ${props => props.isLast ? 'auto' : '80px'};
`