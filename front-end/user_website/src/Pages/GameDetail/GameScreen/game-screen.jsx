import React from 'react'
import axios from 'axios'

import './game-screen.css'

const playGame = () =>{
    document.getElementById('gameScreenBtnPlay').style.display = 'none'
    document.getElementById('openGameScreen').style.display = 'block'
}

function GameScreen({gameLink,gameSrc,gameId,gameImg}) {
    return (
        <div className="game-screen-outside" id="game-screen-outside">
            <div className="game-screen" id="gameScreenBtnPlay">
                <div className="game-screen__img">
                    <img src={axios.defaults.baseURL + 'uploads/images/games/game-play-image/'+ gameId + '/' + gameImg[0]} className="game-screen__img--css" alt="" />
                    <img src={axios.defaults.baseURL + 'uploads/images/games/game-play-image/'+ gameId + '/' + gameImg[1]} className="game-screen__img--css" alt="" />
                    <img src={axios.defaults.baseURL + 'uploads/images/games/game-play-image/'+ gameId + '/' + gameImg[2]} className="game-screen__img--css" alt="" />
                    <img src={axios.defaults.baseURL + 'uploads/images/games/game-play-image/'+ gameId + '/' + gameImg[3]} className="game-screen__img--css" alt="" />
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
                    <iframe className="playGame__screen" src={gameLink + gameSrc}></iframe>
            </div>
        </div>
            
        
    )
}

export default GameScreen
