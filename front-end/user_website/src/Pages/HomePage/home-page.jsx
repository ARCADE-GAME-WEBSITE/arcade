import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import FriendList from "./FriendList/friend-list";
import FamousGame from "./FamousGame/famous-game";
import SortByCategory from "./SortByCategory/SortByCategory";
import GameType from "./GameGenre/GameType";

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

  // const elementGame = document.querySelectorAll('.all-games')
  const filterBtn = document.querySelectorAll('#CategoryCell .game-type')
  // console.log(Array.from(filterBtn)[0]);
    

  // const filter = (btn) => {
  //   console.log(btn);  
  //   Array.from(filterBtn).forEach(function (element) {
  //     console.log(element);
  //           for(let i=0; i<filterBtn.length; i++) {
  //               filterBtn[i].classList.remove('game-type--active');
  //           }
  //           btn.target.parentElement.classList.add('game-type--active');
        
            
            // let name_filter = element.dataset.filter;

    //     Array.from(elementGame).forEach(function(item){
    //         if (item.dataset.item.indexOf(name_filter) !== -1 || name_filter === 'all')
    //         item.style.display = 'block';
    //         else {
    //             item.style.display = 'none';
    //         }
    //     })
    //     // e.stopPropagation()
        
  //   })
  // }
  const filter = (btn,e) => {
    Array.from(filterBtn).forEach(function () {
      for(let i=0; i<filterBtn.length; i++) {
        filterBtn[i].classList.remove('game-type--active');
      }
    })
    e.target.parentElement.classList.add("game-type--active")
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
                    <GameType listCategory = {listCategory} filter={filter}/>
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