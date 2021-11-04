import React from 'react'

import './game-screen.css'

import img1 from '../../../Assets/Images/Game/1.png'
import img2 from '../../../Assets/Images/Game/2.png'
import img3 from '../../../Assets/Images/Game/3.png'
import img4 from '../../../Assets/Images/Game/4.png'

const playGame = () =>{
    document.getElementById('gameScreenBtnPlay').style.display = 'none'
    document.getElementById('openGameScreen').style.display = 'block'
}
const stopScrool = ()=>{
    window.addEventListener("scroll",(e) =>{ e.preventDefault() })
}

function GameScreen() {
    return (
        <div className="game-screen-outside" focused={stopScrool}>
            <div className="game-screen" id="gameScreenBtnPlay">
                <div className="game-screen__img">
                    <img src={img1} className="game-screen__img--css" alt="" />
                    <img src={img2} className="game-screen__img--css" alt="" />
                    <img src={img3} className="game-screen__img--css" alt="" />
                    <img src={img4} className="game-screen__img--css" alt="" />
                </div>
                <ul className="game-screen__btn">
                    <li className="btn-play" onClick={playGame}>
                        <button className="btn-play-link">PLAY</button>
                    </li>
                    <li className="btn-toturial">
                        <button className="btn-toturial-link">TOTURIAL</button>
                    </li>
                    <li className="btn-music">
                        <button className="btn-music-link">MUSIC</button>
                    </li>
                    <li className="btn-setting">
                        <button className="btn-setting-link">SETTING</button>
                    </li>
                </ul>
            </div> 
            <div className="playGame" id="openGameScreen">
                    <iframe className="playGame__screen" src="http://localhost:8000/uploads/games/2048.html"></iframe>
            </div>
        </div>
            
        
    )
}

export default GameScreen
