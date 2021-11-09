import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CategoriesCell.css"
import "../GameCell/game-cell"

function CategoriesCell({categories}){
    
    
    return (
        <div>
            <div className="game-type">
                        <a className="game-type-link"  href ={'/home/' + categories.CategoryName} >
                            <div className="game-type__name">{categories.CategoryName}</div>
                        </a>
            </div>
            
        </div>
    );

}

export default CategoriesCell;