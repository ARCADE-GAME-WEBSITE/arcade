import React from "react";
import axios from "axios";
import { Button } from 'semantic-ui-react'
import {Route, } from 'react-router-dom';



function GameByCategoriesCell({categories,game}){
    const gameAvaUrl = axios.defaults.baseURL + 'uploads/images/games/avatar/' + game.Url;

    return (
        <a className="categories_type-link" href={'/game-detail/' + game.Url}>
            <img className="categories_type__img" src={gameAvaUrl} alt="Cannot get image" />
            <div className="categories_type__name">{game.Title}</div>
            <div className="categories_type__dev">Arcade games</div>
        </a>
    );
}

export default GameByCategoriesCell;