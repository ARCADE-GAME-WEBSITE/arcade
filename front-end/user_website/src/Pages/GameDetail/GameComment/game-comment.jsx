import React, { useEffect , useState , useRef }from 'react'

import './game-comment.css'
import axios from 'axios'

    
function GameComment({user}) {
    
    var inputCmt = document.getElementById("game-comment__account-btn")

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    
    const [cmt,setCmt] = useState([])
    const [userName,setUserName] = useState([])
    let avatarUrl = useRef()

    const getComment = () => {
       
        axios.post('/comment', {
            GameID:1,
            UserID: user.id,
            Content: inputCmt.value,
            }, config)
            .then(function (response) {
                console.log(response)
                
                    return axios.get('/comment/get-by-game-id/1/')
                    .then((res) => {
                    console.log(res.data)
                    const cmtArr = res.data.slice(res.data.length - 3,res.data.length)
                    const saveArrContent = [cmtArr[0].Content,cmtArr[1].Content,cmtArr[2].Content]
                    const saveArrName = [cmtArr[0].UserID,cmtArr[1].UserID,cmtArr[2].UserID]
                    setCmt(saveArrContent)
                    setUserName(saveArrName)
                    avatarUrl.current = axios.defaults.baseURL + 'uploads/images/users/' + user.Avatar;
                    
                })
                .catch((err) => {
                    console.log(err);
                })
            })
            .catch(function (error) {
                console.log(error);
                });
        inputCmt.value = null
    }
    
    console.log(cmt);
    console.log(userName);
    console.log(avatarUrl.current)

    useEffect(() =>{
        if(user){
            document.getElementById('test1').style.display = 'none'
            document.getElementById('test2').style.display = 'flex'
        }
    },[user])

    return (
            <div className="game-comment game-desc">
                <h3>COMMENTS</h3>
                <div className="game-comment__account" id="test1">
                    <div className="game-comment__account-header">Please register or login to post a comment</div>
                    <div className="game-comment__account-btn">
                        <div className="login-out">
                            <a href="/" className="login-out__btn" id='logined'>
                            LOGIN
                            </a>
                        </div>
                        <div className="login-out">
                            <a href="/" className="login-out__btn--css">
                            REGISTER
                            </a>
                        </div>
                    </div>
                </div>
                <div className="game-comment__account-login" id="test2">
                    <img className="comment__img" src={avatarUrl.current} alt="" />
                    <input type="text" placeholder="Comment text" className="game-comment__account-btn" id="game-comment__account-btn"/>
                    <input type="submit" value="Send" className="game-comment__account-send" onClick={getComment}/>
                </div>
                <div className="game-comment__content">
                    <div className="game-comment__content1">
                        <img className="comment__img" src={avatarUrl.current} alt="" />
                        <div className="game-comment__desc">
                            <div className="comment__user">
                                {userName[2]}
                            </div>
                            <div className="comment__cmt">
                                {cmt[2]}
                            </div>
                        </div>
                    </div>
                    <div className="game-comment--css">
                        <div className="game-comment__content2">
                            <img className="comment__img" src="https://cdn.y8.com/assets/avatars/male/2-48x48-133d7ce1c8ccb095a7b84c29d898c830.png" alt="" />
                            <div className="game-comment__desc">
                                <div className="comment__user">
                                    {userName[1]}
                                </div>
                                <div className="comment__cmt">
                                    {cmt[1]}
                                </div>
                            </div>
                        </div>
                        <div className="game-comment__content3">
                            <img className="comment__img" src="https://cdn.y8.com/assets/avatars/female/1-48x48-f9d569b01ef34ef639b5b1031fea7f23.png" alt="" />
                            <div className="game-comment__desc">
                                <div className="comment__user">
                                    {userName[0]}
                                </div>
                                <div className="comment__cmt">
                                    {cmt[0]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default GameComment
