import "./FamousGame_NewGame.css";
import Carousel from "react-bootstrap-carousel"
/* <!--Game Picture --> */
import pacman from "../../assets/LogoGame/pacman.png";
import { CarouselItem } from "react-bootstrap";
/* <!--Game Link --> */
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
const FamousGame = () => {
    return (    
        <div>
            <div className="game-diff game-desc">
                <Carousel>

                            <h3>FAMOUS GAME</h3>
                                        <div className="game-diff--css">
                                            <CarouselItem>
                                            <a className="game-diff-link" href="#">
                                                    <img className="game-diff__img" src="https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg" alt="" />
                                                    <div className="game-diff__name">Battle Field</div>
                                                    <div className="game-diff__dev">Arcade games</div>
                                            </a>
                                            </CarouselItem>
                                            <a className="game-diff-link" href="#">
                                                <img className="game-diff__img" src="https://thaotruong.com/wp-content/uploads/2019/09/dao-vang-y8.jpg" alt="" />
                                                <div className="game-diff__name">Gold miner</div>
                                                <div className="game-diff__dev">Arcade games</div>
                                            </a>
                                            <a className="game-diff-link" href="#">
                                                <img className="game-diff__img" src="https://img.itch.zone/aW1nLzQ1OTg5MzMucG5n/original/m2ItNC.png" alt="" />
                                                <div className="game-diff__name">Among Us</div>
                                                <div className="game-diff__dev">Arcade games</div>
                                            </a>
                                            <a className="game-diff-link" href="#">
                                                <img className="game-diff__img" src="https://st.gamevui.com/images/image/2019/08/21/chu-be-lua-co-gai-nuoc-1-200.jpg" alt="" />
                                                <div className="game-diff__name">Fire boy and Watergirl</div>
                                                <div className="game-diff__dev">Arcade games</div>
                                            </a>
                                        </div>  
                                    <div className="game-diff--css">
                                        <a className="game-diff-link" href="#">
                                            <img className="game-diff__img" src="https://kevin.games/assets/images/games/happy-snakes.jpg" alt="" />
                                            <div className="game-diff__name">Slither</div>
                                            <div className="game-diff__dev">Arcade games</div>
                                        </a>
                                        <a className="game-diff-link" href="#">
                                            <img className="game-diff__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfH1PBgEdxH0JLhBLeKBLdmCSRY0RqVRv1_0yQnqTWueQoOSOmLiVp1HJ5eQysm_y_vsA&usqp=CAU" alt="" />
                                            <div className="game-diff__name">Gun mayhem</div>
                                            <div className="game-diff__dev">Arcade games</div>
                                        </a>
                                        <a className="game-diff-link" href="#">
                                            <img className="game-diff__img" src="https://img-hws.y8.com/cloud/y8-thumbs/63824/small.gif" alt="" />
                                            <div className="game-diff__name">Caro X.O</div>
                                            <div className="game-diff__dev">Arcade games</div>
                                        </a>
                                        <a className="game-diff-link" href="#">
                                            <img className="game-diff__img" src="https://st.gamevui.com/images/image/2014/11/1/songoku-10-hd1.jpg" alt="" />
                                            <div className="game-diff__name">Dragonball Fighting</div>
                                            <div className="game-diff__dev">Arcade games</div>
                                        </a>
                                    </div>
                                    </Carousel>
            </div>         
        </div>
    );
};
export default FamousGame;