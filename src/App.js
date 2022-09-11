import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Game from './components/Game'


function App() {
  const [score, setScore] = useState(0)
  const [comScore, setComScore] = useState(0)
  const[playerName, setPlayerName] = useState('your')
  const[computerName, setComputerName] = useState('COM')

  return (
    <div className="App">
      <Header score={score} comScore={comScore} playerName={playerName} computerName={computerName}/>
      <Game score={score} setScore={setScore} comScore={comScore} setComScore ={setComScore} playerName={playerName} setPlayerName={setPlayerName} computerName={computerName} setComputerName={setComputerName}/>
    </div>
  )
}

export default App
