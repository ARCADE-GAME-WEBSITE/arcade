import React from 'react';
import {Link} from 'react-router-dom';
import "./famous-game.css";
import GameDetail from '../../GameDetail/game-detail';
import InfiniteCarousel from 'react-leaf-carousel';
import { Button } from 'semantic-ui-react'
/* <!--Game Picture --> */

/* <!--Game Link --> */

const FamousGame = () => {
    return (
        <div>
            <h3>FAMOUS GAME</h3>
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
                <Link to='/game-detail'>
                    <Button type="button">
                        <a className="famous-game-link" href="/">
                            <img className="famous-game__img" src="https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg" alt="" />
                            <div className="famous-game__name">Battle Field</div>
                            <div className="famous-game__dev">Arcade games</div>
                        </a>
                    </Button>
                </Link>


                <a className="famous-game-link" href="/">
                    <img className="famous-game__img" src="https://thaotruong.com/wp-content/uploads/2019/09/dao-vang-y8.jpg" alt="" />
                    <div className="famous-game__name">Gold miner</div>
                    <div className="famous-game__dev">Arcade games</div>
                </a>
                <a className="famous-game-link" href="/">
                    <img className="famous-game__img" src="https://img.itch.zone/aW1nLzQ1OTg5MzMucG5n/original/m2ItNC.png" alt="" />
                    <div className="famous-game__name">Among Us</div>
                    <div className="famous-game__dev">Arcade games</div>
                </a>
                <a className="famous-game-link" href="/">
                    <img className="famous-game__img" src="https://st.gamevui.com/images/image/2019/08/21/chu-be-lua-co-gai-nuoc-1-200.jpg" alt="" />
                    <div className="famous-game__name">Fire boy and Watergirl</div>
                    <div className="famous-game__dev">Arcade games</div>
                </a>
            
            
                <a className="famous-game-link" href="/">
                    <img className="famous-game__img" src="https://kevin.games/assets/images/games/happy-snakes.jpg" alt="" />
                    <div className="famous-game__name">Slither</div>
                    <div className="famous-game__dev">Arcade games</div>
                </a>
                <a className="famous-game-link" href="/">
                    <img className="famous-game__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfH1PBgEdxH0JLhBLeKBLdmCSRY0RqVRv1_0yQnqTWueQoOSOmLiVp1HJ5eQysm_y_vsA&usqp=CAU" alt="" />
                    <div className="famous-game__name">Gun mayhem</div>
                    <div className="famous-game__dev">Arcade games</div>
                </a>
                <a className="famous-game-link" href="/">
                    <img className="famous-game__img" src="https://img-hws.y8.com/cloud/y8-thumbs/63824/small.gif" alt="" />
                    <div className="famous-game__name">Caro X.O</div>
                    <div className="famous-game__dev">Arcade games</div>
                </a>
                <a className="famous-game-link" href="/">
                    <img className="famous-game__img" src="https://st.gamevui.com/images/image/2014/11/1/songoku-10-hd1.jpg" alt="" />
                    <div className="famous-game__name">Dragonball Fighting</div>
                    <div className="famous-game__dev">Arcade games</div>
                </a>               
            </InfiniteCarousel>
        </div>
    );
};
export default FamousGame;