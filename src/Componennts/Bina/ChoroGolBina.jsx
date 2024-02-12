import styled from 'styled-components'

const ChotoGolBina = () => {
  return (
    <Circle></Circle>
  )
}

export default ChotoGolBina

const Circle = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  background-color: #852121;
  border-radius: 50%;
  left: 60px;

    &::before{
      content: '';
      position: absolute;
      top: 36%;
      left: 36%;
      width: 25%;
      height: 25%;
      background-color: black; /* Inner circle color */
      border-radius: 50%;
    }
`
