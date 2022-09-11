
const GameEngine = ({userOption, score, setScore, playerName,comChoice, comScore, setComScore, computerName,setGameComment, setGameStart}) => {
 
    
    const pieces = userOption+comChoice
    switch (pieces) {

        ////////////////////////////////
        // /////user chooses rock//////
        ////////////////////////////////

      case 'rockrock':
          setGameComment(`it's a tie`);
          break;
          
      case 'rockpaper':
          setGameComment(`${computerName}'s paper wraps up ${playerName} rock`);
          setComScore(comScore + 1);
          break;
                
      case 'rocklizard':
          setGameComment(`${playerName} rock kills ${computerName}'s lizard`);
          setScore(score + 1)
          break;
      
      case 'rockspock':
          setGameComment(`${computerName}'s spock swallows ${playerName} rock`);
          setComScore(comScore + 1)
          break;
          
      case 'rockscissors':
          setGameComment(`${playerName} rock destroys ${computerName}'s scissors`);
          setScore(score + 1)
        break;




        ////////////////////////////////
        ////// user chooses paper///////
        ////////////////////////////////

      case 'paperrock':
          setGameComment(`${playerName} paper wraps up ${computerName}'s rock`);
          setScore(score + 1)
        break;
          
      case 'paperpaper':
          setGameComment(`it's a tie`);
        break;
                
      case 'paperlizard':
          setGameComment(`${computerName}'s lizard eats up ${playerName} paper`);
          setComScore(comScore + 1)
        break;
      
      case 'paperspock':
          setGameComment(`${playerName} paper chokes ${computerName}'s spock`);
          setScore(score + 1)
        break;
          
      case 'paperscissors':
          setGameComment(`${computerName}'s scissors cuts through ${playerName} paper`);
          setComScore(comScore + 1)
        break;
        
        
        
        
        ////////////////////////////////
        //// user chooses scissors//////
        ////////////////////////////////
                
      case 'scissorsrock':
          setGameComment(`${computerName}'s rock destroys ${playerName} scissors`);
          setComScore(comScore + 1)
        break;
          
      case 'scissorspaper':
          setGameComment(`${playerName} scissors cuts through ${computerName}'s paper`);
          setScore(score + 1)
        break;
                
      case 'scissorslizard':
          setGameComment(`${playerName} scissors cuts through and dissects ${computerName}'s lizard`);
          setScore(score + 1)
        break;
      
      case 'scissorsspock':
          setGameComment(`${computerName}'s spock swallows ${playerName} scissors`);
          setComScore(comScore + 1)
        break;
          
      case 'scissorsscissors':
          setGameComment(`it's a tie`);
        break;
        
        
        
        
        ////////////////////////////////
        /////// user chooses lizard/////
        ////////////////////////////////
      case 'lizardrock':
          setGameComment(`${computerName}'s rock kills ${playerName} lizard`);
          setComScore(comScore + 1)
        break;
          
      case 'lizardpaper':
          setGameComment(`${playerName} lizard chews down on ${computerName}'s paper`);
          setScore(score + 1)
        break;
                
      case 'lizardlizard':
          setGameComment(`it's a tie`);
        break;
      
      case 'lizardspock':
          setGameComment(`${playerName} lizard defeats ${computerName}'s spock in a fight`);
          setScore(score + 1)
        break;
          
      case 'lizardscissors':
          setGameComment(`${computerName}'s scissors is used to perform a surgery on ${playerName} lizard`);
          setComScore(comScore + 1)
        break;
        
        
        
        
        
        ////////////////////////////////
        /////// user chooses spock/////
        ////////////////////////////////
      case 'spockrock':
          setGameComment(`${playerName} spock swallows ${computerName}'s rock`);
          setScore(score + 1)
        break;
          
      case 'spockpaper':
          setGameComment(`${computerName}'s paper wraps up and chokes ${computerName}'s spock`);
          setComScore(comScore + 1)
        break;
                
      case 'spocklizard':
        setGameComment(`${computerName}'s lizard defeats ${playerName} spock in a fight`);
        setComScore(comScore + 1)
        break;
      
      case 'spockspock':
        setGameComment(`it's a tie`);
        break;
          
      case 'spockscissors':
          setGameComment(`${playerName} spock swallows ${computerName}'s scissors`);
          setScore(score + 1)
        break;

      default:
          
    } 
 
 
 
 
    return (

    (setTimeout(setGameStart(false)), 1500)

  )
}

export default GameEngine