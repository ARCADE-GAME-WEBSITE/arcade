
import React from "react";
import axios from 'axios';
import './sidebar.css'

import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import {
  BackgroundColorContext
} from "../BackgroundColorContext";

function SideBar(props,{user}) {
  const sidebarRef = React.useRef(null);
  const getAvatar = () => {
    axios.get('/uploads/images/users/' + user.Avatar ).then(res => {
      console.log(res);
    });
  }
  const { routes, rtlActive } = props;
  var showImg = function(event) {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
      };
  return(user) ?(
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={color}>
          <div className="sidebar-wrapper" ref={sidebarRef} > 
              <div className="logo">
                <form runat="server">
                  <img className="avatar-img" src="" alt=""   id="output"  width="200px" height="200px" />            
                  <input accept="image/*" className="inputImg" type='file' onChange={showImg}/>
                </form>
                <p className="username"></p>
                <button onClick={getAvatar}>abc</button>
              </div>
            <Nav>
              {routes.map((prop) => {
                if (prop.redirect) return null;
                return (
                  <li 
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                      onClick={props.toggleSidebar}
                    >
                      <i className={prop.icon} />
                      <p>{rtlActive ? prop.rtlName : prop.name}</p>
                    </NavLink>
                  </li>
                );
              })}
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  ):null ;
}


export default SideBar;
