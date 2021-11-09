import React from 'react';

import "./famous-game.css";

import InfiniteCarousel from 'react-leaf-carousel';
import GameCell from '../GameCell/game-cell';


function FamousGame({listGame}) {
    const allGames = listGame.map(game => {
        return (
            <GameCell game={game}/>
        );
    })

    console.log(allGames);

    return (
        <div>
            <h3>GAME</h3>
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
                </InfiniteCarousel> */}
            <a className="GameCell">
                {allGames}
            </a>
        </div>
    );
};
export default FamousGame;