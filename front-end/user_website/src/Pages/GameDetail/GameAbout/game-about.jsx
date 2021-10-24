import React from 'react'
import './game-about.css'
function gameAbout() {
    return (
        <div className="game-about game-desc">
            <h3>DETAILS</h3>
            <div className="game-about__info">
                Version of the most classNameic and addictive arcade puzzle game: Tetris. For those who've had the unlikely luck of not being able to play Tetris, the rules are very simple: move and turn the pieces that fall so they fit with the pieces that are at the bottom of the screen. The experts'll be able to start the game wherever they want.
            </div>
            <footer className="game-about__footer">
            <div className="game-dev">Developer: Arcade Game</div>
                <div>Added on <time datetime="02-10-2021">02-10-2021</time></div>
            </footer>
        </div>
    )
}

export default gameAbout
