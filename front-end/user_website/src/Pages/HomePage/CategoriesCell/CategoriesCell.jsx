import React ,{useState} from "react";
import "./CategoriesCell.css"
import "../GameCell/game-cell"
import classNames from 'classnames';


function CategoriesCell({categories,filter}){
    // const elementGame = document.querySelectorAll('.all-games')
    // const filterBtn = document.querySelectorAll('#CategoryCell .game-type')

    // Array.from(filterBtn).forEach(function (element) {
    //     console.log(element);
    //     element.addEventListener('click', function (e) {
    //         for(let i=0; i<filterBtn.length; i++) {
            //     filter_btn[i].classList.remove('game-type--active');
            // }
            // this.classList.add('game-type--active');
        
            
    //         let name_filter = element.dataset.filter;

    //     Array.from(elementGame).forEach(function(item){
    //         if (item.dataset.item.indexOf(name_filter) !== -1 || name_filter === 'all')
    //         item.style.display = 'block';
    //         else {
    //             item.style.display = 'none';
    //         }
    //     })
    //     // e.stopPropagation()
    //     })
    // })

    return (
            <div className="game-type">
                <a className="game-type-link" onClick={(e) => filter(`${categories.CategoryName}`,e)}>
                    {categories.CategoryName}
                </a>
            </div>
    );
}

export default CategoriesCell;