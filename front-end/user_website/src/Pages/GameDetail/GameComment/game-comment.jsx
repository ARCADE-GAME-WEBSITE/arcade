import React, { useEffect , useState , useRef }from 'react'

import './game-comment.css'
import axios from 'axios'

    
function GameComment({user,gameId}) {
    
    var inputCmt = document.getElementById("game-comment__account-btn")
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    
    let avatarUrl = useRef()
    let cmtCurrent = useRef()
    let userNameCurrent = useRef()
    const [cmt,setCmt] = useState([cmtCurrent.current])
    const [userName,setUserName] = useState([userNameCurrent.current])
    const [timeSend,setTimeSend] = useState('')
    console.log(timeSend);
    const GAMEID= useRef()
    GAMEID.current = gameId
    function getComment(){
        axios.post('/comment', {
            GameID:GAMEID.current,
            UserID: user.id,
            Content: inputCmt.value,
            }, config)
            .then(function (response) {
                console.log(response)
                    return axios.get('comment/get-by-game-id/' + GAMEID.current)
                        .then((res) => {
                            console.log(res.data)
                            const cmtArr = res.data.post.slice(res.data.post.length - 3,res.data.post.length)
                            console.log(cmtArr);
                            const saveArrContent = [cmtArr[0].Content,cmtArr[1].Content,cmtArr[2].Content]
                            cmtCurrent.current = cmtArr[2].Content
                            const saveArrName = [cmtArr[0].UserName,cmtArr[1].UserName,cmtArr[2].UserName]
                            userNameCurrent.current = cmtArr[2].UserName
                            setCmt(saveArrContent)
                            setUserName(saveArrName)
                            avatarUrl.current = axios.defaults.baseURL + 'uploads/images/users/' + user.Avatar;
                            
                            for (var i = 0; i <=2;i++){
                                cmtArr[i].createdAt=cmtArr[i].createdAt.replace("T","  ")
                                cmtArr[i].createdAt=cmtArr[i].createdAt.replace(".000Z", "s")
                            }
                            
                            const saveArrTimeSend =  [cmtArr[0].createdAt,cmtArr[1].createdAt,cmtArr[2].createdAt]

                            setTimeSend(saveArrTimeSend)
                            console.log(saveArrTimeSend);
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

    const cmtDelete = () => {
        axios.delete('/comment')
    }
    
    console.log(cmt);
    console.log(userName);
    console.log(timeSend);
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
                            <label for="btnLogIn" className="login-out__btn" id='logined'>
                            LOGIN
                            </label>
                        </div>
                        <div for="btnSignUp" className="login-out">
                            <label for="btnSignUp" className="login-out__btn--css">
                            SIGN UP
                            </label>
                        </div>
                    </div>
                </div>
                <div className="game-comment__account-login" id="test2">
                    <img className="comment__img" src={avatarUrl.current} alt="" />
                    <input type="text" placeholder="Comment text" className="game-comment__input" id="game-comment__account-btn"/>
                    <input type="submit" value="Send" className="game-comment__account-send" onClick={getComment}/>
                </div>
                <div className="game-comment__content">
                    <div className="game-comment__content1">
                        <img className="comment__img" src={avatarUrl.current} alt="" />
                        <div className="game-comment__desc">
                            <div className="comment__top">
                                <div className="comment__user">
                                    {userName[2]}
                                </div>
                                <div className="comment__time">
                                    <time>{timeSend[2]}</time>
                                </div>
                            </div>
                            <div className="comment__cmt">
                                {cmt[2]}
                            </div>
                        </div>
                        <div className="comment__update">
                            <i class="comment__update-icon fas fa-pen-alt"></i>
                        </div>
                        <div className="comment__delete" onClick={cmtDelete}>
                            <i class="comment__delete-icon far fa-trash-alt"></i>
                        </div>
                    </div>
                    <div className="game-comment--css">
                        <div className="game-comment__content2">
                            <img className="comment__img" src={avatarUrl.current} alt="" />
                            <div className="game-comment__desc">
                                <div className="comment__top">
                                    <div className="comment__user">
                                        {userName[1]}
                                    </div>
                                    <div className="comment__time">
                                        <time>{timeSend[1]}</time>
                                    </div>
                                </div>
                                <div className="comment__cmt">
                                    {cmt[1]}
                                </div>
                            </div>
                            <div className="comment__update">
                                <i class="comment__update-icon fas fa-pen-alt"></i>
                            </div>
                            <div className="comment__delete">
                                <i class="comment__delete-icon far fa-trash-alt"></i>
                            </div>
                        </div>
                        <div className="game-comment__content3">
                            <img className="comment__img" src={avatarUrl.current} alt="" />
                            <div className="game-comment__desc">
                                <div className="comment__top">
                                    <div className="comment__user">
                                        {userName[0]}
                                    </div>
                                    <div className="comment__time">
                                        <time>{timeSend[0]}</time>
                                    </div>
                                </div>
                                <div className="comment__cmt">
                                    {cmt[0]}
                                </div>
                            </div>
                            <div className="comment__update">
                                <i class="comment__update-icon fas fa-pen-alt"></i>
                            </div>
                            <div className="comment__delete">
                                <i class="comment__delete-icon far fa-trash-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default GameComment
