import React from 'react';

import './game-detail.css'

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

function GameDetail() {
    return (
        <div className="grid wide-1">
            <div className="row">
                <FriendList/>
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
                <GameComment/>
                <GameTag/>
                <GameDiff/>
                <GameSame/>
            </div>
            
        </div>
    );
}

export default GameDetail