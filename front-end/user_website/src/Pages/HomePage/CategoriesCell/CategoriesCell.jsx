import React from "react";
import axios from "axios";
import "./CategoriesCell.css"


function CategoriesCell({categories}){

    return (
        <div>
                    <a className="game-type-link" href ={'/home/' + categories.CategoryName} >
                        <div className="game-type__name">{categories.CategoryName}</div>
                    </a>
        </div>

    );
}

export default CategoriesCell;