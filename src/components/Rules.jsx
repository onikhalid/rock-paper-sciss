import { useState } from 'react' 
import {VscClose} from 'react-icons/vsc'

import rulesImg from '../assets/image-rules-bonus.svg'

const Rules = () => {

  const[rules, setRules] = useState(null)
  const openRules = ()=> setRules(true)
  const closeRules = ()=> setRules(false)

  return (
    <div>
        <div onClick={openRules} className="rule"><p>RULES</p></div>

        {rules && <div className="rule__img">
          <div className='rule__img-header'>
            <div className='rule__close'  onClick={closeRules}>
              <h4>CLOSE</h4>
              <VscClose className='rule__close-icon'/>
            </div>
          </div>
          <img src={rulesImg} alt='Rules'/>
        </div> }



        {/* pseudo eules-img to account for smooth animation */}
        {/* this shows up when "rules" tab is closed and slide out */}
        {rules===false && <div className="rule__img fake">
          <div className='rule__img-header'>
            <div className='rule__close'  onClick={closeRules}>
              <h4>CLOSE</h4>
              <VscClose className='rule__close-icon'/>
            </div>
          </div>
          <img src={rulesImg} alt='Rules'/>
        </div> }
        
    </div>
  )
}

export default Rules