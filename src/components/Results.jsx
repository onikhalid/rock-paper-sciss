import {ImWink} from "react-icons/im"
import {RiEmotionSadLine} from "react-icons/ri"
import {FaHandshake} from "react-icons/fa"

 const WinGame = ({gameReset}) => {
  return (
    <div className='results win'>
      <h1>YOU WON, WELL-DONE!!</h1>
      <ImWink/>
      <button onClick={gameReset}>PLAY AGAIN</button>
    </div>
  )
}
 const DrawGame = ({gameReset}) => {
  return (
    <div className='results draw'>
      <h1>IT'S A TIE, GOOD GAME</h1>
      <FaHandshake/>
      <button onClick={gameReset}>PLAY AGAIN</button>
    </div>
  )
}

 const LoseGame = ({gameReset}) => {
  return (
    <div className='results lose'>
      <h1>YOU LOST, BETTER LUCK NEXT TIME!!</h1>
      <RiEmotionSadLine/>
      <button onClick={gameReset}>PLAY AGAIN</button>
    </div>
  )
}

export const Results = ({score, comScore, gameReset}) => {

  if(score > comScore){
    return (
      <WinGame gameReset={gameReset}/>
    )
  }
  else if(score < comScore){
    return (
      <LoseGame gameReset={gameReset}/>
    )
  }
  else if(score === comScore){
    return (
      <DrawGame gameReset={gameReset}/>
    )
  }
}
