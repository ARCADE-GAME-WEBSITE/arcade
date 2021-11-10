import React from 'react';

import "./famous-game.css";

import GameCell from '../GameCell/game-cell';


function FamousGame({listGame}) {
    const allGames = listGame.map(game => {
        return (
            <GameCell game={game}/>
        );
    })

    console.log(allGames);

    return (
        <div>
            <h3>GAME</h3>
                <a className="GameCell">
                    {allGames}
                </a>
                <h1 id="no__product"></h1>
        </div>
    );
};
export default FamousGame;