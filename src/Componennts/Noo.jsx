import styled from "styled-components"

const Noo = () => {
  return (
    <No>
      <div className="Guli"></div>
      <div className="Nline"></div>
      <div className="Dati"></div>
    </No>
  )
}

export default Noo

const No = styled.div` 
  display: flex;
  /* background-color: black; */
  width: 100px;
  /* align-items: center; */

  .Guli{
    position: relative;
    top: 70px;
    /* bottom: 30px; */
    width: 20px;
    height: 40px;
    background-color: red;
  }

  .Nline{
    width: 60px;
    height: 20px;
    background-color: red;
    position: relative;
    top: 70px;
  }

  .Dati{
    height: 214px;
    width: 20px;
    background-color: red;
  }
`
