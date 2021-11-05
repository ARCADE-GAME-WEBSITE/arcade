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

function GameScreen({game}) {
    return (
        <div className="game-screen-outside" id="game-screen-outside">
            <div className="game-screen" id="gameScreenBtnPlay">
                <div className="game-screen__img">
                    <img src={img1} className="game-screen__img--css" alt="" />
                    <img src={img2} className="game-screen__img--css" alt="" />
                    <img src={img3} className="game-screen__img--css" alt="" />
                    <img src={img4} className="game-screen__img--css" alt="" />
                </div>
                <ul className="game-screen__btn">
                    <li className="btn-play" onClick={playGame}>
                        <a className="btn-play-link">PLAY</a>
                    </li>
                    <li className="btn-toturial">
                        <a className="btn-toturial-link">TOTURIAL</a>
                    </li>
                    <li className="btn-music">
                        <a className="btn-music-link">MUSIC</a>
                    </li>
                    <li className="btn-setting">
                        <a className="btn-setting-link">SETTING</a>
                    </li>
                </ul>
            </div> 
            <div className="playGame" id="openGameScreen">
                    <iframe className="playGame__screen" src=''></iframe>
            </div>
        </div>
            
        
    )
}

export default GameScreen
