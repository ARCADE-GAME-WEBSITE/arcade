import React from "react";
import axios from "axios";
import { Button } from 'semantic-ui-react'
import {Link, } from 'react-router-dom';

function CategoriesCell({categories}){
    const categoriesAvaUrl = axios.defaults.baseURL + 'uploads/images/games/Categories/' + categories.CategoryName;

    return (
            
            <a className="game-type-link" href={'/game-detail/' + categories.CategoryName}>
                <img className="game-type__img" src={categoriesAvaUrl} alt="Cannot get categories image" />
                <div className="game-type__name">{categories.CategoryName}</div>
            </a>

    );
}

export default CategoriesCell;