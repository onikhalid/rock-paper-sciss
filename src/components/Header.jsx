import Logo from '../assets/logo-bonus.svg'


const Header = ({score, comScore, playerName, computerName}) => {
  return (
    <header>
        <div>
            <img className='logo' src={Logo} alt="Logo" />
        </div>
        <div className='scoreboard'>
          <div className='header__score'>
              <p>{playerName.toUpperCase()} SCORE</p>
              <h2>{score}</h2>
          </div>
          <div className='header__score'>
              <p>{computerName.toUpperCase()} SCORE</p>
              <h2>{comScore}</h2>
          </div>

        </div>
    </header>
  )
}

export default Header