import React, { useEffect, useState } from "react";
import './home-page.css';
import axios from "axios";
import FriendList from "./FriendList/friend-list";
import FamousGame from "./FamousGame/famous-game";
import NewGame from "./NewGame/new-game";
import GameType from "./GameGenre/GameType";

function HomePage({user}) {

  const [listGame,setListGame] = useState([]) ;

  useEffect(() => {
    axios.get('game/').then(result => {
      setListGame(result.data)
    }) .catch(err => {
      console.log(err)
    })
  }, [])  
  

  return (
    <div>
      <div className="App-left-sidebar">
          <FriendList user={user}/>
      </div>

      <div className="App-main">
        <div className='grid wide'>
              <div className='row'>
                <div className='col-sm-9 col-md-6 col-lg-8'>
                  <GameType/>
                </div>
              </div>
            </div>
          <div className='grid wide'>
            <div className='row'>
              <div className='col-sm-9 col-md-6 col-lg-8'>
                <FamousGame listGame = {listGame}/> 
              </div>
            </div>
          </div>
          <div className='grid wide'>
              <div className='row'>
                  <div className='col-sm-9 col-md-6 col-lg-8'>
                    <NewGame/>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
 
export default HomePage;