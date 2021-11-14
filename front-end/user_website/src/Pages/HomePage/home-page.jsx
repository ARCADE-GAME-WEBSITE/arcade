import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import FriendList from "./FriendList/friend-list";
import FamousGame from "./FamousGame/famous-game";
// import SortByCategory from "./SortByCategory/SortByCategory";
import GameCategories from "./GameCategories/GameCategories";

import './home-page.css';
function HomePage({user, categories}) {

  const listGameOld = useRef()

  const [listGame,setListGame] = useState([]) ;
  useEffect(() => {
    axios.get('game/').then(result => {
      setListGame(result.data)
      listGameOld.current = result.data
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

  const filterBtn = document.querySelectorAll('#CategoryCell .game-category')

  const filter = (btn,e) => {
    Array.from(filterBtn).forEach(function () {
      for(let i=0; i<filterBtn.length; i++) {
        filterBtn[i].classList.remove('game-category--active');
      }
    })
    e.target.parentElement.classList.add("game-category--active")
    const filterData = listGameOld.current.filter(item => item.Category.indexOf(btn) !== -1)
    setListGame(filterData)
  }

  return (
      <div className="Background-homepage" >
        <div className="App-left-sidebar">
            <FriendList user={user}/>
        </div>

        <div className="App-main">
          <div className='container'>
                <div className='row'>
                  <div className='col-sm-12 col-md-9 col-lg-9 mx-auto'>
                    <GameCategories listCategory = {listCategory} filter={filter}/>
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