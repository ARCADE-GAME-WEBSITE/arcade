import React, {useState,useRef,useEffect,useLayoutEffect} from "react";
import './friend-list.css'
import axios from 'axios'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import friendList from '../../../Assets/Images/App/friend-list.png'
import facebook from '../../../Assets/Images/Icons/facebook.png'


function FriendList({user}) {
    const openAddFriendForm = ()=> {
        document.getElementById('friend-list__add').style.display = 'none';
        document.getElementById('friend-list__add-form').style.display = 'flex';
    }
    
    const inputEmail = document.getElementById('friend-list__add-email')
    const [listFriend, setListFriend] = useState([])

    const renderListFriend = useRef()
    const getFriend = () => {
        axios.get('/friend/get-by-user-id/' + user.id )
            .then(res => {
                const arrListFriend = res.data.post.map((x)=>{
                    return x.id
                })
                const listFriendById = []
                arrListFriend.map((x)=>{
                    axios.get('user/' + x, config)
                    .then(res =>{
                        listFriendById.push(res.data)
                    })
                    .catch(err => {
                        console.log(err);
                    })
                })
                setListFriend(listFriendById)
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        if(user !=null){
            getFriend()
        }
    },[])
    useEffect(() => {
        renderListFriend.current = listFriend
    },listFriend)

    console.log(renderListFriend.current);

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    

    const AddFriendbyEmail = () => {
        if(inputEmail.value !=null)
        {
            if(user.email != inputEmail.input)
            {
                axios.post('/friend', {
                    UserID : user.id,
                    FriendEmail : inputEmail.value
                    }, config)
                    .then(response => {
                        getFriend()
                    })
                    .catch(err => {
                        alert('Friend exists or cant find')
                })
            }
            else alert('Can not add your self')
        }

    }


    return (user) ? (
        <div>
            <div className="friend-list">      
                <div className="friend-list__heading">
                    <div className="friend-list__friend active">
                        <img src={friendList} className="friend-list__friend-img" alt="" />
                        <div className="friend-list__friend-name">FRIENDS</div>
                    </div>
                    <div className="friend-list__contact">
                        <img src={facebook} className="friend-list__friend-img" alt="" />
                        <div className="friend-list__friend-name">CONNECT</div>
                    </div>
                </div>
    
                <ul className="list-group list-group-flush">
                    {   
                        // renderListFriend.current.map((friend) => {return(
                        //     <li className="list-group-item friend-info" key={friend.id}>
                        //         <div className="friend-info__item">
                        //             <img className="friend-list__title-img" src={friend.Avatar} alt="" />
                        //             <div className="friend-list__title-name">{friend.Full_name}</div>
                        //             <button className="friend-list__title-add">Invite</button>
                        //         </div>
                        //     </li>
                        //     )})
                    }
                </ul>
                <div className="friend-list__footer">
                    <button className="friend-list__add" id="friend-list__add" onClick={openAddFriendForm}>
                        <i className="fas fa-plus friend-list__add-icon"></i>
                        <div className="friend-list__friend-name">Add Friend</div>
                    </button>
                    <div className="friend-list__add-email" id="friend-list__add-form">
                        <input type="text" className="form-control" name='' id="friend-list__add-email" placeholder="Friend Email"/>
                        <button type="submit" className="btn btn-primary" onClick={AddFriendbyEmail}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}
 
export default FriendList 