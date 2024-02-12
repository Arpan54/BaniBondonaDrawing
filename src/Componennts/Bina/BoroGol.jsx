import styled from "styled-components"

const BoroGol = () => {
  return (
    <NicherGol>
      <div className="ChotoRec"></div>
      <div className="StringHolder"></div>
    </NicherGol>
  )
}

export default BoroGol

const NicherGol = styled.div`
    height: 250px;
    width: 250px;
    border-radius: 50%;
    background-color: #852121;
    position: relative;
    top: -35px;

    .ChotoRec{
      width: 35px;
      height: 14px;
      background-color: #490E0E;
      top: 115px;
      left: 40%;
      position: relative;
    }
    .StringHolder{
      width: 116px;
      height: 16px;
      background-color: black;
      top: 53%;
      left: 26%;
      position: relative;
    }
` 
