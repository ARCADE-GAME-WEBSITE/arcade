import React from "react";
import "./CategoriesCell.css"
import "../GameCell/game-cell"

function CategoriesCell({categories}){
    // const elementGame = document.querySelectorAll('.all-games')
    // const [category , setCategory] = useState()
    // const filterBtn = document.querySelectorAll('#CategoryCell .game-type')
    // setCategory(Array.from(filterBtn))
    // console.log(category);

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
        <div className={"game-category"} >
            <a className="game-category-link">
                {categories.CategoryName}
            </a>
        </div>
    );
}

export default CategoriesCell;