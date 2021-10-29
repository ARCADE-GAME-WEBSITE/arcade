import React from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "./SideBar/sidebar";
import routes from "./user-account-routes";
import PlayedGames from "./PlayedGames/played-games";
import Records from "./PersonalRecord/personal-record";
import UserProfile from "./UserProfile/user-profile";
import ListFriend from "./FriendList/friend-list";

import { BackgroundColorContext } from "./BackgroundColorContext";



function UserAccount({props,user})  {
  
  const mainPanelRef = React.useRef(null);
  // const getRoutes = (routes) => {
  //   return routes.map((prop, key) => {
  //     if (prop.layout === "/user-account") {
  //       return (
  //         <Route
  //           path={prop.layout + prop.path}
  //           component={prop.component}
  //           key={key}
  //         />
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  // };
  return (

     
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <React.Fragment>
          <div className="wrapper">
            <SideBar
              routes={routes}
              user={user}
            />
            <div className="main-panel" ref={mainPanelRef} data={color} >
              <Switch > 
                {/* {getRoutes(routes) */}
                <Route path='/user-account/user-profile' component={() => <UserProfile  user={user}  /> }/>
                <Route path='/user-account/records' component={() => <Records  /> }/>
                <Route path='/user-account/friends-list' component={() => <ListFriend  /> }/>
                <Route path='/user-account/played-games' component={() => <PlayedGames /> }/>
              </Switch>
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>

  );
}

export default UserAccount;
