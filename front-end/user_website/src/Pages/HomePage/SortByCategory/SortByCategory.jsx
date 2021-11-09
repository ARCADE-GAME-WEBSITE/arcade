import "./SortByCategory.css";
import React, {useState,useRef,useEffect} from 'react';
import axios from "axios";

/* <!--Game Picture --> */

/* <!--Game Link --> */

function SortByCategory({listCategory,listGame}){
const gameAvaUrl = axios.defaults.baseURL + 'uploads/images/games/avatar/' + listGame.Avatar;
const allGames = listGame.map(game => {
    return( game = {game}
    )
})
 

    return(
        <div>
              <a className="famous-game-link" href={'/game-detail/' + allGames.Url}>
                <img className="famous-game__img" src={gameAvaUrl} alt="Cannot get image" />
                <div className="famous-game__name">{allGames.Title}</div>
                <div className="famous-game__dev">Arcade games</div>
            </a>
        
        </div>
    );
}
export default SortByCategory;