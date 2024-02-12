import styled from 'styled-components'

const ChotoGol = () => {
  return (
    <Circle></Circle>
  )
}

export default ChotoGol

const Circle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: maroon;
  border-radius: 50%;

    &::before{
      content: '';
      position: absolute;
      top: 25%;
      left: 25%;
      width: 50%;
      height: 50%;
      background-color: #fff; /* Inner circle color */
      border-radius: 50%;
    }
`
