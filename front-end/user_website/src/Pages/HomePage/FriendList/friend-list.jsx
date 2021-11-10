import React, {useState,useRef,useEffect,useLayoutEffect} from "react";
import axios from 'axios'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './friend-list.css'
import friendList from '../../../Assets/Images/App/friend-list.png'
import facebook from '../../../Assets/Images/Icons/facebook.png'


function FriendList({user}) {
    const openAddFriendForm = ()=> {
        document.getElementById('friend-list__add').style.display = 'none';
        document.getElementById('friend-list__add-form').style.display = 'flex';
    }
    
    const inputEmail = document.getElementById('friend-list__add-email')
    const [listFriend, setListFriend] = useState([])


    useEffect(() => {
        if(user!=null)
        getFriend()
    },[user])

    console.log(listFriend);
    console.log(user);
    const getFriend = () => {
        axios.get('/friend/get-by-user-id/' + user.id )
            .then(res => {
                console.log(res.data.post);
                setListFriend(res.data.post)

            })
            .catch(err => {
                console.log(err);
            })
    }
    

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    

    const AddFriendbyEmail = () => {
        if(inputEmail.value !=null)
        {
            if(user.email != inputEmail.value)
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
    
                <div className="list-group list-group-flush">
                    {   
                        listFriend ? listFriend.map((friend) => (
                            <div className="friend-info" key={friend.id}>
                                <div className="friend-info__item">
                                    <img className="friend-list__title-img" src={axios.defaults.baseURL + 'uploads/images/users/' + friend.FriendAvatar} alt="" />
                                    <div className="friend-list__title-name">{friend.FriendEmail}</div>
                                    <button className="friend-list__title-add">Invite</button>
                                </div>
                            </div>
                            ))
                            :null
                    }
                </div>
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