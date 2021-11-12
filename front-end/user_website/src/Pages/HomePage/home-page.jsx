import React, { useEffect, useState } from "react";
import axios from "axios";
import FriendList from "./FriendList/friend-list";
import FamousGame from "./FamousGame/famous-game";
import SortByCategory from "./SortByCategory/SortByCategory";
import GameType from "./GameGenre/GameType";

import './home-page.css';
function HomePage({user, categories}) {

  const [listGame,setListGame] = useState([]) ;

  useEffect(() => {
    axios.get('game/').then(result => {
      setListGame(result.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])  
  
  const [listCategory,setCategory] = useState([]);

  useEffect (() =>{
    axios.get('category/').then(result => {
      setCategory(result.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
      <div className="Background-homepage" >
        <div className="App-left-sidebar">
            <FriendList user={user}/>
        </div>

        <div className="App-main">
          <div className='container'>
                <div className='row'>
                  <div className='col-sm-12 col-md-6 col-lg-9 mx-auto'>
                    <GameType listCategory = {listCategory} />
                  </div>
                </div>
              </div>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-9 mx-auto'>
                  <FamousGame listGame = {listGame}/> 
                </div>
              </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-9 col-md-6 col-lg-9 mx-auto'>
                      {/* <SortByCategory listGame = {listGame} listCategory = {listCategory} /> */}
                    </div>
                </div>
            </div>
        </div>
      </div>

    
  );
}
 
export default HomePage;