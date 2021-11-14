import React from 'react';

import "./famous-game.css";

import GameCell from '../GameCell/game-cell';


function FamousGame({listGame}) {
    const allGames = listGame.map(game => {
        return (
            <GameCell game={game}/>
        );
    })

    return (
        <div className="AllGames">
            <h3 className="SectionTitle">All Games</h3>
            <label className="GameCell">
                {allGames}
            </label>
            <h1 id="no__product">What is this?</h1>
        </div>
    );
};
export default FamousGame;