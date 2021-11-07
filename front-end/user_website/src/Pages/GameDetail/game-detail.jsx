import React, {useState,useRef,useEffect} from 'react';
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

    const [gameDemoUrl,setGameDemoUrl] = useState('')
    const [gameId,setGameId] = useState()
    const [gameSrc, setGameSrc] = useState('')
    const [gameDes, setGameDes] = useState('')
    const [gameCreatedAt, setGameCreatedAt] = useState('')
    const [gameTitle, setGameTitle] = useState('')
    const [gameImg, setGameImg] = useState('')
    const gameLink = axios.defaults.baseURL + 'uploads/games/'

        useEffect(() => {
            axios.get('/game/get-by-url/'+gameUrl)
            .then((res)=>{
                console.log(res.data);
                setGameDemoUrl(res.data.DemoUrl)
                setGameId(res.data.id)
                setGameSrc(res.data.Url)
                setGameDes(res.data.Description)
                setGameCreatedAt(res.data.createdAt)
                setGameTitle(res.data.Title)
                setGameImg(res.data.GamePlayImage.split(' '))
            })
            .catch((err) => {
                console.log(err);
            })
        },[gameUrl])

        console.log(gameImg);
    return (
        <div className="grid wide-1">
            <div className="row">
                <FriendList user={user}/>
                <GameScreen gameLink={gameLink} gameSrc={gameSrc} gameId={gameId} gameImg={gameImg}/>
            </div>
            <div className="row">
                <GameControl/>
            </div>
            <div className="row">
                <GameInfo gameTitle={gameTitle}/>
            </div>

            <div className="row">
                <GameAbout gameDes={gameDes} gameCreatedAt={gameCreatedAt}/>
                <GameDemo gameDemoUrl={gameDemoUrl}/>
            </div>
            
            <div className="row">
                {console.log(gameId)}
                <GameComment user={user} gameId={gameId}/>
                <GameTag/>
                <GameDiff/>
                <GameSame/>
            </div>
            
        </div>
    );
}

export default GameDetail