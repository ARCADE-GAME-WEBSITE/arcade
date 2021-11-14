import React from 'react'
// import axios from 'axios'
import { useState}from 'react'
import "./GameType.css";
import CategoriesCell from '../CategoriesCell/CategoriesCell';
/* <!--Game Picture --> */

/* <!--Game Link --> */

function GameType({listCategory,filter}){

    const allCategories = listCategory.map(categories => {
        return (
            <CategoriesCell categories={categories} filter={filter}/>
        );
    })
    
    

    return (
        <div style = {{marginLeft: "80px"}}>
            <h3>Game Type</h3>
                <div className = "CategoryCell" id="CategoryCell" >
                    {allCategories}
                </div>
        </div>
    );
};

export default GameType;