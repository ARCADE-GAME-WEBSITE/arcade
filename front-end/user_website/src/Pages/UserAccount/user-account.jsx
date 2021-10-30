import React from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "./SideBar/sidebar";
import routes from "./user-account-routes";

import { BackgroundColorContext } from "./BackgroundColorContext";

function UserAccount({user})  {
  
  const mainPanelRef = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user-account") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
            user={user}
          />
        );
      } else {
        return null;
      }
    });
  };

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
                {getRoutes(routes)}
              </Switch>
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default UserAccount;
