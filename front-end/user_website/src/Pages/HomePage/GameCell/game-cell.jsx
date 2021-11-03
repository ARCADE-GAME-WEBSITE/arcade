import React from "react";
import axios from "axios";
import { Button } from 'semantic-ui-react'
import {Link, } from 'react-router-dom';

function GameCell({game}){
    const gameAvaUrl = axios.defaults.baseURL + 'uploads/images/games/avatar/' + game.Url;

    return (
        // <Link path={'/game-detail/' + game.Url}>
            
            <a className="famous-game-link" href={'/game-detail/' + game.Url}>
                <img className="famous-game__img" src={gameAvaUrl} alt="Cannot get image" />
                <div className="famous-game__name">{game.Title}</div>
                <div className="famous-game__dev">Arcade games</div>
            </a>
        // </Link>
    );
}

export default GameCell;