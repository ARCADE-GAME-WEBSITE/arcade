import React, { useEffect, useState } from "react";
import './home-page.css';
import axios from "axios";
import FriendList from "./FriendList/friend-list";
import FamousGame from "./FamousGame/famous-game";
import SortByCategory from "./SortByCategory/SortByCategory";
import GameType from "./GameGenre/GameType";

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
          <div className='grid wide'>
                <div className='row'>
                  <div className='col-sm-9 col-md-6 col-lg-8'>
                    <GameType listCategory = {listCategory} />
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
                      <SortByCategory listGame = {listGame} listCategory = {listCategory} />
                    </div>
                </div>
            </div>
        </div>
      </div>

    
  );
}
 
export default HomePage;