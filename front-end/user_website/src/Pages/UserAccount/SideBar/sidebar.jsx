
import React from "react";

import './sidebar.css'

import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import {
  BackgroundColorContext
} from "../BackgroundColorContext";

function SideBar(props) {
  const sidebarRef = React.useRef(null);
  const { routes, rtlActive } = props;

      var showImg = function(event) {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
      };
  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={color}>
          <div className="sidebar-wrapper" ref={sidebarRef}>
              <div className="logo">
                <form runat="server">
                  <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt=""   id="output"  width="200px" height="200px" />            
                  <input accept="image/*" className="inputImg" type='file' onChange={showImg}/>
                </form>
                <p className="username">bduyphuong12</p>
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
  );
}


export default SideBar;
