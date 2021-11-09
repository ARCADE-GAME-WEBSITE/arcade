import React from "react";
import axios from "axios";
import "./game-cell.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function GameCell({game}){
    const gameAvaUrl = axios.defaults.baseURL + 'uploads/images/games/avatar/' + game.Avatar;

    return (
        <a className="famous-game-link" href={'/game-detail/' + game.id + "/" + game.Url}>
            <img className="famous-game__img" src={gameAvaUrl} alt="Cannot get image" />
            <div className="famous-game__name">{game.Title}</div>
            <div className="famous-game__dev">Arcade games</div>
        </a>
    );
}

export default GameCell;