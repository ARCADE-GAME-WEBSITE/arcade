import React from "react";
import './home-page.css'

import FamousGame from "./FamousGame/famous-game";
import NewGame from "./NewGame/new-game";

function HomePage() {
  return (
      <div className="App-main">
          <div className='grid wide'>
            <div className='row'>
              <div className='col-sm-9 col-md-6 col-lg-8'>
                <FamousGame/>
              </div>
            </div>
          </div>
          <div className='grid wide'>
              <div className='row'>
                  <div className='col-sm-9 col-md-6 col-lg-8'>
                    <NewGame/>
                  </div>
              </div>
          </div>
      </div>
  );
}
 
export default HomePage;