import React, {useEffect} from "react";
import axios from 'axios';
import './sidebar.css'

import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import {
  BackgroundColorContext
} from "../BackgroundColorContext";

function SideBar({routes,user}) {
  var avatar;
  useEffect(() => {
      axios.get('/uploads/images/users/' + user.Avatar ).then(res => {
        console.log(res.data);
        avatar=res.data;
      });
  }, [])
  
  var showImg = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
  };
  
  return(user)?(
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={color}>
          <div className="sidebar-wrapper"  > 
              <div className="logo">
                <form runat="server">
                  <img className="avatar-img" src={avatar} alt=''   id="output"  width="200px" height="200px" />            
                  <input accept="image/*" className="inputImg" type='file' onChange={showImg}/>
                </form>
                
              </div>
            <Nav>
              {routes.map((prop) => {
                return (
                  <li 
                  >
                    <NavLink
                      to={prop.layout + prop.path + '/'+ user.id}
                      className="nav-link"
                      activeClassName="active"
                      onClick={routes.toggleSidebar}
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              })}
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  ):null;
}
export default SideBar;
