import styled from "styled-components"
import Akar from "./Componennts/Akar"
import Bo from "./Componennts/Bo"
import Noo from "./Componennts/Noo"
import Arrow from "./Componennts/Arrow"
import No from "./Componennts/No"
import NoDo from "./Componennts/NoDo"
import ChotoGolBina from "./Componennts/Bina/ChoroGolBina"
import Danda from "./Componennts/Bina/Danda"
import BoroGol from "./Componennts/Bina/BoroGol"
import Strings from "./Componennts/Bina/Strings"
import Trikon from "./Componennts/Trikon"
const App = () => {

  return (
    <Full>
      <TopKolka>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
        <Trikon/>
      </TopKolka>
      <div className="Majh">
      <Bina>
        <ChotoGolBina/>
        <Danda/>
        <div className="DoriLeft">
          <Strings/>
          <Strings/>
          <Strings/>
          <Strings/>
        </div>
        <BoroGol/>
      </Bina>
      <BaniBondona>
        <Bani>
        <div className="up">
          <Arrow/>
        </div>
        <div className="Matra">
          <div className="leftMatra"></div>
          <div className="rightMatra"></div>
        </div>
        <div className="low">
          <Bo/>
          <Akar/>
          <Noo/>
          <Akar/>
        </div>
        </Bani>
        <Bondona>
          <Bo/>
          <NoDo/>
          <No/>
          <Akar/>
        </Bondona>
      </BaniBondona>
      <Bina>
        <ChotoGolBina/>
        <Danda/>
        <div className="DoriRight">
          <Strings/>
          <Strings/>
          <Strings/>
          <Strings/>
        </div>
        <BoroGol/>
      </Bina>
      </div>
      
      {/* <DownKolka>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
        <ChotoGol/>
      </DownKolka> */}
    </Full>
  )
}

export default App
const Full = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  .Majh{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .DoriLeft{
    display: flex;
    gap: 5px;
    position: absolute;
    top: 238px;
    left: 329px;
    background-color: transparent;
    
  }
  .DoriRight{
    display: flex;
    gap: 5px;
    position: absolute;
    top: 234px;
    right: 342px;
    background-color: transparent;
    
  }
`
const TopKolka = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`
// const DownKolka = styled.div`
//   display: flex;
//   justify-content: center;
//   /* position: absolute;
//   bottom: 0; */
// `
const BaniBondona = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-end;
  justify-content: center;
`
const Bani = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: end;

  .Matra{
    display: flex;
    .leftMatra{
      width: 226px;
    height: 20px;
    background-color: red;
    /* justify-content: left; */
    left: -79px;
    position: relative;
    }
    .rightMatra{
      width: 84px;
      height: 20px;
      background-color: red;
    }
    
  }
  .low{
    display: flex;
    gap: 20px;
  }
  
  /* background-color: black; */
`

const Bondona = styled.div`
  display: flex;
  gap: 20px;
  border-top: 20px solid red;
`

const Bina = styled.div`
  left: 20px;
`