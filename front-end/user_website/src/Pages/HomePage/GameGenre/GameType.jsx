import React, { useEffect , useState , useRef }from 'react'
import axios from 'axios'
import "./GameType.css";

import InfiniteCarousel from 'react-leaf-carousel';
/* <!--Game Picture --> */

/* <!--Game Link --> */

function GameCategories({categories}){
    
    
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
      const [CategoriesID,setCategoriesID] = useState([])
      const [CategoriesName,setCategoriesName] = useState([])
      const [createdAt,setCreatedAt] = useState([])
      let avatarGameUrl = useRef()

      const getCategories = () => {
       
        axios.get('games/', {
            categoriesID:categories.id,
            CategoryName: categories.CategoryName,
            createdAt: categories.createdAt,
            }, config)
            .then(function (response) {
                console.log(response)
                
                    return axios.get('games/get-by-game-id/1/')
                    .then((res) => {
                    console.log(res.data)
                    const categoriesArr = res.data.slice(res.data.length - 3,res.data.length)
                    const saveArrcategoriesID = [categoriesArr[0].categoriesID,categoriesArr[1].categoriesID,categoriesArr[2].categoriesID]
                    const saveArrCategoryName = [categoriesArr[0].CategoryName,categoriesArr[1].CategoryName,categoriesArr[2].CategoryName]
                    const saveArrcreatedAt = [categoriesArr[0].createdAt,categoriesArr[1].createdAt,categoriesArr[2].createdAt]
                    setCategoriesID(saveArrcategoriesID)
                    setCategoriesName(saveArrCategoryName)
                    setCreatedAt(saveArrcreatedAt)
                    avatarGameUrl.current = axios.defaults.baseURL + 'uploads/images/games/' + categories.Avatar;
                    
                })
                .catch((err) => {
                    console.log(err);
                })
            })
            .catch(function (error) {
                console.log(error);
                });
    }
    
    console.log(CategoriesName);
    console.log(createdAt);
    console.log(avatarGameUrl.current)

    useEffect(() =>{
        if(categories){
            document.getElementById('test1').style.display = 'none'
            document.getElementById('test2').style.display = 'flex'
        }
    },[categories])




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
                    <div className="game-type__name"> {CategoriesName[3]} </div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://cdn-icons-png.flaticon.com/512/2394/2394697.png" alt="" />
                    <div className="game-type__name">{CategoriesName[2]}</div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://cdn-icons-png.flaticon.com/512/103/103874.png" alt="" />
                    <div className="game-type__name">{CategoriesName[4]}</div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://freepngimg.com/thumb/sports_equipment/22530-7-sport.png" alt="" />
                    <div className="game-type__name">{CategoriesName[6]}</div>
                </a>
            
            
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://image.freepik.com/free-vector/pixel-art-style-character-game-arcade-play_273625-565.jpg" alt="" />
                    <div className="game-type__name">{CategoriesName[1]}</div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://media.istockphoto.com/vectors/strategy-game-icon-trendy-strategy-game-logo-concept-on-white-from-vector-id1127577302" alt="" />
                    <div className="game-type__name">{CategoriesName[7]}</div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://cdn3.iconfinder.com/data/icons/gaming-54/100/video-game2-512.png" alt="" />
                    <div className="game-type__name">{CategoriesName[5]}</div>
                </a>
                <a className="game-type-link" href="/">
                    <img className="game-type__img" src="https://2player.co/upload/cache/upload/imgs/zombie-mission-2-m344x260.jpg" alt="" />
                    <div className="game-type__name">{CategoriesName[10]}</div>
                </a>               
            </InfiniteCarousel>
        </div>
    );
};

export default GameCategories;