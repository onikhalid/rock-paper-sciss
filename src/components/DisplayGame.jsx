import Option from "./Option"


import scissors from '../assets/icon-scissors.svg'
import paper from '../assets/icon-paper.svg'
import spock from '../assets/icon-spock.svg'
import lizard from '../assets/icon-lizard.svg'
import rock from '../assets/icon-rock.svg'


const DisplayGame = ({userOption, comChoice, gameComment}) => {


    let imgUser
    let imgCom

    // user choice Img
    if (userOption ==='rock') {
        imgUser = rock

    }
    else if (userOption ==='paper') {
        imgUser = paper

    }
    else if (userOption ==='scissors') {
        imgUser = scissors

    }
    else if (userOption ==='spock') {
        imgUser = spock

    }
    else if (userOption ==='lizard') {
        imgUser = lizard
    }
    
    // computer choice Img
    if (comChoice ==='rock') {
        imgCom = rock

    }
    else if (comChoice ==='paper') {
        imgCom = paper

    }
    else if (comChoice ==='scissors') {
        imgCom = scissors

    }
    else if (comChoice ==='spock') {
        imgCom = spock

    }
    else if (comChoice ==='lizard') {
        imgCom = lizard
    }




  return (
    <div className='game-display'>
        <p>{gameComment}</p>
        <div className='GamePlay'>
            <Option type={userOption} src={imgUser}/>
            <h2>VS</h2>
            <Option type={comChoice} src={imgCom}/>
        </div>
    </div>
  )
}

export default DisplayGame