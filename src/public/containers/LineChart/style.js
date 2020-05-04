import styled from 'styled-components'

export const Container = styled.div`
  background-color: lightgray;
  height: 300px;
`

export const Path = styled.path`
  stroke-width: 2;
  fill: none;
  stroke: ${props => props.color};
`

export const Axis = styled.g`
  stroke: #000000;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
`