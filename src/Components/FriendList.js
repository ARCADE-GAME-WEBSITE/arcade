import React from 'react'
import friendList from '../assets/img/friend-list.png'
import fbIcon from '../assets/img/fb-icon.png'
import friendImg from '../assets/img/friendImg.jpg'
import friendImg1 from '../assets/img/friendImg1.png'
import friendImg2 from '../assets/img/friendImg2.jpg'
import friendImg3 from '../assets/img/friendImg3.jpg'


function FriendList() {
    return (
        <div class="col l-2">
            <div class="friend-list">      
                <div class="friend-list__heading">
                    <div class="friend-list__friend active">
                        <img src={friendList} class="friend-list__friend-img" alt="" />
                        <div class="friend-list__friend-name">FRIENDS</div>
                    </div>
                    <div class="friend-list__contact">
                        <img src={fbIcon} class="friend-list__friend-img" alt="" />
                        <div class="friend-list__friend-name">CONNECT</div>
                    </div>
                </div>
                <div class="friend-list__heading-2">
                    <button class="friend-list__add">
                        <i class="fas fa-plus friend-list__add-icon"></i>
                        <div class="friend-list__friend-name">Add Friend</div>
                    </button>
                </div>
                <div class="friend-list__title">
                    <div class="friend-info">
                        <div class="friend-info__item">
                            <img class="friend-list__title-img" src={friendImg} alt="" />
                            <div class="friend-list__title-name">Player 1 </div>
                            <button class="friend-list__title-add">Invite</button>
                        </div>
                    </div>
                    <div class="friend-info">
                        <div class="friend-info__item">
                            <img class="friend-list__title-img" src={friendImg1} alt="" />
                            <div class="friend-list__title-name">Player 2 </div>
                            <button class="friend-list__title-add">Invite</button>
                        </div>
                    </div>
                    <div class="friend-info">
                        <div class="friend-info__item">
                            <img class="friend-list__title-img" src={friendImg2} alt="" />
                            <div class="friend-list__title-name">Player 3 </div>
                            <button class="friend-list__title-add">Invite</button>
                        </div>
                    </div>
                    <div class="friend-info">
                        <div class="friend-info__item">
                            <img class="friend-list__title-img" src={friendImg3} alt="" />
                            <div class="friend-list__title-name">Player 4 </div>
                            <button class="friend-list__title-add">Invite</button>
                        </div>
                    </div>
                </div>
                <div class="friend-list__footer">
                    <i class="friend-list__footer-icon far fa-window-close"></i>
                </div>
            </div>
        </div>
    )
}

export default FriendList
