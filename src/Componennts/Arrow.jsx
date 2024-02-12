import styled from 'styled-components'

const Arrow = () => {
  return (
    <Arw>
    </Arw>
  )
}

export default Arrow

const Arw = styled.div`
    position: relative;
    width: 0;
    height: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 50px solid red;

  &::before{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 45px solid transparent;
    border-right: 45px solid transparent;
    border-bottom: 25px solid yellow;
    top: 25px;
    left: -45px;
  }
`
