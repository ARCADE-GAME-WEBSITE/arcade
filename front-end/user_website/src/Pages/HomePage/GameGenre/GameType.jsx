import React from 'react';

import "./GameType.css";
import "./GameTypeID";

import InfiniteCarousel from 'react-leaf-carousel';
/* <!--Game Picture --> */

/* <!--Game Link --> */


const GameGenre = () => {
    return (
        <div>
            <h3>Game Type</h3>
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
                    
            
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2019/11/Best-Arcade-Racing-Games-Of-All-Time-Ranked-10.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" alt="" />
                    <div className="game-type__name">Racing</div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://cdn-icons-png.flaticon.com/512/2394/2394697.png" alt="" />
                    <div className="game-type__name">FPS</div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://cdn-icons-png.flaticon.com/512/103/103874.png" alt="" />
                    <div className="game-type__name">Fighting</div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://freepngimg.com/thumb/sports_equipment/22530-7-sport.png" alt="" />
                    <div className="game-type__name">Sports</div>
                </a>
            
            
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://image.freepik.com/free-vector/pixel-art-style-character-game-arcade-play_273625-565.jpg" alt="" />
                    <div className="game-type__name">Action And Adventure</div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://media.istockphoto.com/vectors/strategy-game-icon-trendy-strategy-game-logo-concept-on-white-from-vector-id1127577302" alt="" />
                    <div className="game-type__name">Strategy</div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://cdn3.iconfinder.com/data/icons/gaming-54/100/video-game2-512.png" alt="" />
                    <div className="game-type__name">Puzzel</div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/447e941c-1eec-4bb6-9a93-177687a767bc/d85eoaj-d9177c0a-5145-4bf6-9aaa-eb26b8015aff.jpg/v1/fill/w_1024,h_1366,q_75,strp/oriental_flirting_game_by_bluemagic_neko234_d85eoaj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NiIsInBhdGgiOiJcL2ZcLzQ0N2U5NDFjLTFlZWMtNGJiNi05YTkzLTE3NzY4N2E3NjdiY1wvZDg1ZW9hai1kOTE3N2MwYS01MTQ1LTRiZjYtOWFhYS1lYjI2YjgwMTVhZmYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._xuImqmluSvjUunBUg4Zb9OWafD9_BxY5B9FddXK-H4" alt="" />
                    <div className="game-type__name">For Girl</div>
                </a>               
            </InfiniteCarousel>
        </div>
    );
};
export default GameGenre;