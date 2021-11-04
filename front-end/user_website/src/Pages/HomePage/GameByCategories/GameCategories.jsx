import React from 'react'
// import axios from 'axios'
// import React, { useEffect , useState , useRef }from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import GameByCategoriesCell from '../GameByCategoriesCell/GameByCategoriesCell';
/* <!--Game Picture --> */

/* <!--Game Link --> */

function GameCategories({listGame}){
    const GameCategories = listGame.map(game => {
        return (
            <GameByCategoriesCell game={game}/>
        );
    })



    return (
        <div>
            <h3> {game.CategoryName} </h3>
            <InfiniteCarousel 
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
                    
            </InfiniteCarousel>
            {GameCategories}   
        </div>
    );
};

export default GameCategories;