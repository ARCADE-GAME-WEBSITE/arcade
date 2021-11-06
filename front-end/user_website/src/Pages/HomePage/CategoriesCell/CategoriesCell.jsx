import React from "react";
import axios from "axios";



function CategoriesCell({categories}){
    const categoriesAvaUrl = axios.defaults.baseURL + 'uploads/images/games/Categories/' + categories.CategoryName;

    return (
        <div className="game-type--css">
                    <a className="game-type-link" href ={'/home/' + categories.CategoryName} >
                        <img className="game-type__img" src={categoriesAvaUrl} alt="Cannot get categories image" />
                        <div className="game-type__name">{categories.CategoryName}</div>
                    </a>
        </div>
    );
}

export default CategoriesCell;