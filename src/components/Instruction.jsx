import React, {useState} from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { setOptions, Page, Popup, Button} from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'dark'
});

const popupButtons = [
    'set'
];

const responsivePopup = {
    medium: {
        display: 'anchored',
        width: 400,
        fullScreen: false,
        touchUi: false
    }
};



const Instruction = ({setPlayerName, playerName, setComputerName, computerName, setScore, setComScore, setMoves})=> {
    const [isOpen, setOpen] = useState(false);
    const [anchor, setAnchor] = useState(null);
    
    const onBtnClick = React.useCallback((args) => {
        setAnchor(args.target);
        setOpen(true);
    }, []);
    const changeMoves =(e)=>{
        setMoves(e.target.value)
        setScore(0)
        setComScore(0)
    }


    return (
        <Page>
            <Button onClick={onBtnClick}>SETTINGS ⚙</Button>
            <Popup
                display="anchored"
                contentPadding={false}
                anchor={anchor}
                buttons={popupButtons}
                isOpen={isOpen}
                responsive={responsivePopup}
                onClose={() => {
                    setOpen(false);
                }}
            >
                <input className='settings-input'
                    placeholder="Your name" 
                    onChange={(e)=>setPlayerName(e.target.value)}
                    value={playerName}
                />
                <input className='settings-input'
                    placeholder="ٍSet computer's name" 
                    onChange={(e)=>setComputerName(e.target.value)}
                    value={computerName}
                />
                <select className='settings-input dropdown' name="select no of rounds" onChange={changeMoves}>
                    <option selected disabled>How Many Rounds? ⬇️</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                </select>
                
            </Popup>
        </Page>
    );
}

export default Instruction;