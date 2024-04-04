import React from 'react'
import './style.css';
import css from './dusri.module.css'
const App = () => {
  const divstyle =  {
    width:'30vw',
    height: '10vh',
    // marginLeft: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background :'blue',
    color:'white'
  }
  return (
  <>
     <h1 style={{fontFamily:'gilroy' }} >Alok Rathore</h1>
     <div style={divstyle}>Alok Rathore</div>
     <div style={divstyle}>Alok Rathore</div>
     <div className={css.paracolor}>Alok Rathore</div>
     <div style={divstyle}>Alok Rathore</div>
  </>
  )
}

export default App