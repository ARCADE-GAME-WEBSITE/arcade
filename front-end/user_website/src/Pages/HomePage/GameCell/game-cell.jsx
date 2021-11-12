import React from "react";
import axios from "axios";
import "./game-cell.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function GameCell({game}){
    const gameAvaUrl = axios.defaults.baseURL + 'uploads/images/games/avatar/' + game.Avatar;

    return (
    <div className="game-cell">
        <a className="game-cell-link all-games" href={'/game-detail/' + game.id + "/" + game.Url}>
            <img className="game-cell__img" src={gameAvaUrl} alt="Cannot get image" />
            <div className="game-cell__name">{game.Title}</div>
            <div className="game-cell__rate">Rate:{game.Rate}</div>
            <div className="game-cell__played">Played:{game.Played}</div>
        </a>
    </div>
    );
}

export default GameCell;