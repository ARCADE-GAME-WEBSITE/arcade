import React from 'react'
// import axios from 'axios'
// import React, { useEffect , useState , useRef }from 'react'
import "./GameType.css";
import CategoriesCell from '../CategoriesCell/CategoriesCell';
import InfiniteCarousel from 'react-leaf-carousel';
/* <!--Game Picture --> */

/* <!--Game Link --> */

function GameCategories({listCategory}){
 
    const allCategories = listCategory.map(categories => {
        return (
            <CategoriesCell categories={categories}/>
        );
    })
    


    return (
        <div>
            <h3>Game Type</h3>
            {/* <InfiniteCarousel 
                    breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        },
                    },
                    ]}
                    dots={true}
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0.1}
                    slidesToScroll={4}
                    slidesToShow={4}
                    scrollOnDevice={true}
                >
                    </InfiniteCarousel>    */}
              
                <a className = "CategoryCell">
                    {allCategories}
                </a>

        </div>
    );
};

export default GameCategories;