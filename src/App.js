import Sidebar from "./components/sidebar/Sidebar"
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import FamousGame from "./components/GameComponent/FamousGame.js";
import NewGame from "./components/GameComponent/NewGame";
import "./components/grid.css";

const App = () => {

  return (
    <div>
      <Navbar/>
        <Main/>
          {
            <div className='grid wide'>
              <div className='row'>
                <div className='col-sm-9 col-md-6 col-lg-8'>
                  <FamousGame/>
                </div>
              </div>
            </div>
          }
          {
                  <div className='grid wide'>
                  <div className='row'>
                    <div className='col-sm-9 col-md-6 col-lg-8'>
                      <NewGame/>
                    </div>
                  </div>
                </div>
          }
      <Sidebar/>
    </div>
  );
};

export default App;