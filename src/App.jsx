import { useState } from 'react'
import './App.css'
import Tictactoe from './tictactoe'

function App() {
  const renderSquare=(index) =>{
    return(
      <button className='square' onClick = {handleClick(index)}>X</button>
    )
  }

  const handleClick= (index) => {
    
  }
 

  return (
    <div className='board'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default App
