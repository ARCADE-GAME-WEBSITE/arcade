import React from 'react';
import './game-detail.css'
import axios from 'axios'

import GameScreen from './GameScreen/game-screen'
import GameControl from './GameControl/game-control'
import GameInfo from './GameInfo/game-info'
import GameComment from './GameComment/game-comment'
import GameDiff from './GameDiff/game-diff'
import GameDemo from './GameDemo/game-demo'
import GameTag from './GameTag/game-tag'
import GameSame from './GameSame/game-same'
import GameAbout from './GameAbout/game-about';
import FriendList from '../HomePage/FriendList/friend-list'


function GameDetail({user}) {
    const getUrlGame= window.location.href

    const gameUrl = getUrlGame.slice(getUrlGame.lastIndexOf("/")+ 1 )
    axios.get('/game/'+gameUrl)
    .then((res)=>{
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

    return (
        <div className="grid wide-1">
            <div className="row">
                <FriendList user={user}/>
                <GameScreen/>
            </div>
            <div className="row">
                <GameControl/>
            </div>
            <div className="row">
                <GameInfo/>
            </div>

            <div className="row">
                <GameAbout/>
                <GameDemo/>
            </div>
            
            <div className="row">
                <GameComment user={user}/>
                <GameTag/>
                <GameDiff/>
                <GameSame/>
            </div>
            
        </div>
    );
}

export default GameDetail