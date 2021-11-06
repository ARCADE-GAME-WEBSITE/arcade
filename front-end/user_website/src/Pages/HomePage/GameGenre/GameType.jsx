import React from 'react'
// import axios from 'axios'
// import React, { useEffect , useState , useRef }from 'react'
import "./GameType.css";
import CategoriesCell from '../CategoriesCell/CategoriesCell';
import InfiniteCarousel from 'react-leaf-carousel';
/* <!--Game Picture --> */

/* <!--Game Link --> */

function GameCategories({listCategory}){
    
    
    // const config = {
    //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    //     };
    //   const [CategoriesID,setCategoriesID] = useState([])
    //   const [CategoriesName,setCategoriesName] = useState([])
    //   const [createdAt,setCreatedAt] = useState([])
    //   let avatarGameUrl = useRef()

    //   const getCategories = () => {
       
    //     axios.get('/category', {
    //         categoriesID:listCategory.id,
    //         CategoryName: listCategory.CategoryName,
    //         createdAt: listCategory.createdAt,
    //         }, config)
    //         .then(function (response) {
    //             console.log(response)
                
    //                 return axios.get('/category/id/')
    //                 .then((res) => {
    //                 console.log(res.data)
    //                 const categoriesArr = res.data.slice(res.data.length - 3,res.data.length)
    //                 const saveArrcategoriesID = [categoriesArr[0].categoriesID,categoriesArr[1].categoriesID,categoriesArr[2].categoriesID]
    //                 const saveArrCategoryName = [categoriesArr[0].CategoryName,categoriesArr[1].CategoryName,categoriesArr[2].CategoryName]
    //                 const saveArrcreatedAt = [categoriesArr[0].createdAt,categoriesArr[1].createdAt,categoriesArr[2].createdAt]
    //                 setCategoriesID(saveArrcategoriesID)
    //                 setCategoriesName(saveArrCategoryName)
    //                 setCreatedAt(saveArrcreatedAt)
    //                 avatarGameUrl.current = axios.defaults.baseURL + 'uploads/images/games/' + listCategory.Avatar;
                    
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             })
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             });
    // }
    
    // console.log(CategoriesName);
    // console.log(createdAt);
    // console.log(avatarGameUrl.current)

    const allCategories = listCategory.map(categories => {
        return (
            <CategoriesCell categories={categories}/>
        );
    })



    return (
        <div>
            <h3>Game Type</h3>
            {/* <InfiniteCarousel 
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
                    </InfiniteCarousel>    */}
                <a className = "CategoryCell">
                    {allCategories}
                </a>
        </div>
    );
};

export default GameCategories;