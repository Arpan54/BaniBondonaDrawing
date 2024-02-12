import styled from "styled-components"
import Noo from "./Noo"

const NoDo = () => {
  return (
    <Do>
      <Noo/>
      <div className="Da">
        <div className="BekaDandi"></div>
        <div className="SojaDandi"></div>
      </div>
    </Do>
  )
}

export default NoDo

const Do = styled.div`
  width: 175px;
  display: flex;
  align-items: flex-end;
  /* flex-direction: column; */
  
  .Da{
    display: flex;
    align-items: flex-end;

    .BekaDandi{
      width: 20px;
      background-color: red;
      height: 130px;
      transform: rotate(34deg);
      left: 17px;
      position: relative;
      bottom: -5px;
    }
    .SojaDandi{ 
      width: 20px;
      background-color: red;
      height: 120px;
      position: relative;
      left: 35px;
    }
  }
`
