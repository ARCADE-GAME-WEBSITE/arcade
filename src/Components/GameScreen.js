import React from 'react'
import img1 from '../assets/img/1.png'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/2.png'
import img4 from '../assets/img/4.jpg'

function GameScreen() {
    return (
        <div class="col l-8">
            <div className="game-screen">
                            <div className="game-screen__img">
                                <img src={img1} className="game-screen__img--css" alt="" />
                                <img src={img2} className="game-screen__img--css" alt="" />
                                <img src={img3} className="game-screen__img--css" alt="" />
                                <img src={img4} className="game-screen__img--css" alt="" />
                                
                            </div>
                            <ul className="game-screen__btn">
                                <li onclick="openGame()" className="btn-play">
                                    <a href="" className="btn-play-link">PLAY</a>
                                </li>
                                <li className="btn-toturial">
                                    <a href="" className="btn-toturial-link">TOTURIAL</a>
                                </li>
                                <li className="btn-music">
                                    <a href="" className="btn-music-link">MUSIC</a>
                                </li>
                                <li className="btn-setting">
                                    <a href="" className="btn-setting-link">SETTING</a>
                                </li>
                            </ul>
                        </div>
        </div>
    )
}

export default GameScreen
