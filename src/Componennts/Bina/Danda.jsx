import styled from "styled-components"

const Danda = () => {
  return (
    <Middle>
      <Dandaa>
        <div className="Horizontal">
        
          <Gat></Gat>
          <Gat></Gat>
          <Gat></Gat>
          <Gat></Gat>
          <Gat></Gat>
          <Gat></Gat>
          <Gat></Gat>
          <Gat></Gat>
        </div>
      </Dandaa>
      <div className="GiliDandi">
        <div className="two">
            <GuliDanda></GuliDanda>
            <Guli></Guli>
        </div>
        <div className="two">
            <GuliDanda></GuliDanda>
            <Guli></Guli>
        </div>
        <div className="two">
            <GuliDanda></GuliDanda>
            <Guli></Guli>
        </div>
        <div className="two">
            <GuliDanda></GuliDanda>
            <Guli></Guli>
        </div>
        <div className="two">
            <GuliDanda></GuliDanda>
            <Guli></Guli>
        </div>
        <div className="two">
            <GuliDanda></GuliDanda>
            <Guli></Guli>
        </div>
      </div>
      
    </Middle>
  )
}

export default Danda

const Middle = styled.div`
  display: flex;

  .GiliDandi{
    display: flex;
    flex-direction: column;
    gap: 15px ;
    .two{
      display: flex;
      justify-content: center;
      align-items: center;
      left: 88px;
      position: relative;
    }
  }
  
`
const Dandaa = styled.div`
    width: 65px;
    height: 300px;
    background-color: #852121;
    position: relative;
    top: -15px;
    left: 88px;

    .Horizontal{
      display: flex;
      flex-direction: column;
      gap: 30px;
      background-color: #852121;
      padding-top: 15px;

      
    }
`
const Gat = styled.div`
  height: 5px;
  width: 65px;
  background-color: #430000;

`
const GuliDanda = styled.div`
  height: 5px;
  width: 14px;
  background-color: black;
`
const Guli = styled.div`
  height: 17px;
  width: 17px;
  background-color: black;
  border-radius: 50%;
`