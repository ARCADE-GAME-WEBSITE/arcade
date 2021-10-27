import React from "react";
import { Link } from "react-router-dom";

import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavLink,
} from "reactstrap";

import './nav-bar.css'
import logo from '../../../Assets/Images/App/app-logo.png';
import vietnam_icon from '../../../Assets/Images/Icons/vietnam.png'
import bell_icon from '../../../Assets/Images/Icons/bell.png'
import avatar from '../../../Assets/Images/User/avatar1.jpg'

function NavBar({setShowLogin, setShowSignUp, user, setUser}) { 
    const [collapseOpen] = React.useState(false);

    let buttons;

    const handleLogout = () => {
        localStorage.clear();
        setUser(null)
    }
    
    if (user){
        
        buttons = (
            <div className="nav-right-side collapse navbar-collapse">
                <Collapse navbar isOpen={collapseOpen}>
                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}
                        >
                            <div class="navbar-dropdown">
                                <img src={bell_icon} className="navbar-dropdown-mailbox" alt="Mailbox" />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                    
                        </DropdownMenu>
                    </UncontrolledDropdown>
                
                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}
                        >
                            <div class="navbar-dropdown">
                                <img src={avatar} className="navbar-dropdown-avatar" alt="" />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                            <NavLink tag="li">
                                <Link to={'/user-account/user-profile/' + user.id}>
                                    <DropdownItem className="nav-item">Profile</DropdownItem>
                                </Link>
                            </NavLink>
                            <NavLink tag="li">
                                <Link to={'/user-account/played-games/' + user.id}>
                                    <DropdownItem className="nav-item">Played games</DropdownItem>
                                </Link>
                            </NavLink>
                            <NavLink tag="li">
                                <Link to={'/user-account/friend-list/' + user.id}>
                                    <DropdownItem className="nav-item">Friends</DropdownItem>
                                </Link>
                            </NavLink>
                            <NavLink tag="li">
                                <Link to={'/user-account/records/' + user.id}>
                                    <DropdownItem className="nav-item">Records</DropdownItem>
                                </Link>
                            </NavLink>
                            <DropdownItem divider tag="li" />
                            <NavLink tag="li">
                                <Link to={'/home'} onClick = {handleLogout}>
                                    <DropdownItem 
                                        className="nav-item"
                                    >Log out</DropdownItem>
                                </Link>
                            </NavLink>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}
                        >
                            <div class="navbar-dropdown">
                                <img src={vietnam_icon} className="navbar-dropdown-language" alt="Language" />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Vietnamese</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">English</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Japanese</DropdownItem>
                            </NavLink>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </div>
        )
    }
    else {
        buttons = (
            <div className="nav-right-side collapse navbar-collapse ">
                <Collapse navbar isOpen={collapseOpen}>
                    <button 
                        className="navbar-btn" 
                        name="showLogin"
                        onClick={() => setShowLogin(true)}
                        >Login
                    </button>

                    <button 
                        className="navbar-btn" 
                        name="showSignUp"
                        onClick={() => setShowSignUp(true)}
                        >Sign up
                    </button>
                    
                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}
                        >
                            <div class="navbar-dropdown">
                                <img src={vietnam_icon} className="navbar-dropdown-language" alt="Language" />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Vietnamese</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">English</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Japanese</DropdownItem>
                            </NavLink>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </div>
        )
    }

    return (
        <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="nav-left-side">
                <Link to={'/home'}>
                    <img src={logo} className="navbar-logo" alt="logo" />
                </Link>
                <div className="navbar-search">
                    <input type="text" class="navbar-search-input" placeholder="Search game..." />
                    <button class="navbar-search-btn">
                        <i class="fas fa-search navbar-search-btn-icon" alt="search" />
                    </button>
                </div>
            </div>
            {buttons}
        </nav>
    );
}

export default NavBar;