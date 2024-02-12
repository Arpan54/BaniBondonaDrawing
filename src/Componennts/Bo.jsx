import styled from 'styled-components'

const Bo = () => {
  return (
    <BContainer>
      
    </BContainer>
  )
}

export default Bo

const BContainer = styled.div`
    width: 179px;
    height: 214px;
    border-top: 90px solid transparent;
    border-bottom: 90px solid transparent;
    border-right: 179px solid red;
    /* background-color: red; */

    &::before{
      content: '';
    position: relative;
    top: 7px;
    border-left: 18px solid transparent;
    border-bottom: 69px solid transparent;
    border-right: 143px solid yellow;
    border-top: 68px solid transparent;
  }
`
