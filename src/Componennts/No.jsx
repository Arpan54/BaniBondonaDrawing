import styled from "styled-components"
const No = () => {
  return (
    <Nooo>
      <div className="Guli"></div>
      <div className="Nline"></div>
      <div className="Dati"></div>
    </Nooo>
  )
}

export default No

const Nooo = styled.div`
  display: flex;
  /* background-color: black; */
  width: 100px;
  /* align-items: center; */

  .Guli{
    position: relative;
    top: 158px;
    width: 20px;
    height: 40px;
    background-color: red;
  }

  .Nline{
    width: 60px;
    height: 20px;
    background-color: red;
    position: relative;
    top: 158px;
  }

  .Dati{
    width: 20px;
    background-color: red;
  }
`