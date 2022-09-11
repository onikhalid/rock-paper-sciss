import { useState } from 'react' 


import scissors from '../assets/icon-scissors.svg'
import paper from '../assets/icon-paper.svg'
import spock from '../assets/icon-spock.svg'
import lizard from '../assets/icon-lizard.svg'
import rock from '../assets/icon-rock.svg'


import Option from './Option'
import Rules from './Rules'
import GameEngine from './GameEngine'
import DisplayGame from './DisplayGame'
import Instruction from './Instruction'
import {Results} from './Results'


const Game = ({score, setScore, comScore, setComScore, playerName, setPlayerName, computerName, setComputerName}) => {
  const[moves, setMoves]= useState(10)
  const[rounds, setRounds]= useState(moves)
  const[userOption, setUserOption]= useState('')
  const[comChoice, setComChoice] = useState('')
  const[gameComment, setGameComment] = useState('')
  const[gameStart, setGameStart] = useState(null)
  const[errorMmsg, setErrorMsg] = useState(false)


  // GAME PLAY, UPDATE SCORES AND MOVES 
  const handleClick = (e)=> {
    // Generate Computer Choice
    if(rounds > 1){

      const comOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']
      const random = Math.floor(Math.random() * 5);
      const  index = (comOptions[random])
      setComChoice(index)
      setUserOption(e.target.id)
      setMoves(moves - 1)
      setRounds(moves)
      setGameStart(true)   
    }
    else{
      setErrorMsg(true)
    }
  }
  const gameReset = ()=> {
    setComChoice('')
    setUserOption('')
    setMoves(10)
    setRounds(10)
    setScore(0)
    setComScore(0)
    setGameComment('')
    setGameStart(null)   
    setErrorMsg(false)
    return
  }
  
  

  return (
    <div className='Game'>
      <div className="game-options">
          <Option type='scissors' src={scissors} onClick={handleClick}/>
          <Option type='spock' src={spock} onClick={handleClick}/>
          <Option type='paper' src={paper} onClick={handleClick}/>
          <Option type='lizard' src={lizard} onClick={handleClick}/>
          <Option type='rock' src={rock} onClick={handleClick}/>
      </div>

      <div className="game-settings">
        <p>MOVES: {moves}</p>
        <p><Instruction setPlayerName={setPlayerName} setComputerName={setComputerName} playerName={playerName} computerName={computerName} setScore={setScore} setComScore={setComScore}setMoves={setMoves}/></p>
        <Rules/>
      </div>

      {/* Game VS screen */}
      <DisplayGame userOption={userOption} comChoice={comChoice} gameComment={gameComment}/>


      {gameStart && <GameEngine  
      userOption={userOption} score={score} setScore={setScore} playerName={playerName}
      comChoice={comChoice} comScore={comScore} setComScore={setComScore} computerName={computerName}
      setGameComment={setGameComment} setGameStart={setGameStart}/>}

        {/* show results when moves is 0 */}
      {rounds<=1 && <Results score={score} comScore={comScore} gameReset={gameReset}/>}

        {/* show error message upon click when moves is 0 */}
      {errorMmsg && <div className="error-msg"><h4>Sorry, you've run out of moves!!!</h4></div>}
    </div>
  )
}

export default Game