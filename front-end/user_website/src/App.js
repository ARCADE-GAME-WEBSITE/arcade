import React, { useState, useRef } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './Styles/App.css';
import './Styles/grid.css';
import './Assets/Font/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.min.css';
import './Assets/css/nucleo-icons.css'

import DialogBox from './Components/Popup/DialogBox/dialog-box'
import NavBar from './Components/PageLayout/Header/nav-bar';
import HomePage from './Pages/HomePage/home-page';
import GameDetail from './Pages/GameDetail/game-detail';
import UserAccount from './Pages/UserAccount/user-account';
import Login from './Components/Popup/Form/login';
import SignUp from './Components/Popup/Form/sign-up';
import ForgotPassword from './Components/Popup/Form/forgot-password';
import AboutUs from './Components/PageLayout/Footer/about-us';

function App() {
  const [dialogState, setDialogState] = useState({
    title: "",
    message: "",
    show: false
  })

  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const [user, setUser] = useState(null)

  const formRef = useRef();

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar 
          setShowLogin={setShowLogin} 
          setShowSignUp={setShowSignUp} 
          user={user} 
          setUser={setUser}
        />
        
        <Switch>
          <Route path="/home" component={() => <HomePage user={user}/>} />
          <Route path='/game-detail' component={() => <GameDetail user={user}/>} />
          <Route path="/user-account" render={(props) => <UserAccount {...props} />}></Route>
          <Redirect from="/" to="/home" />
        </Switch>

        <div className="App-footer">
          <AboutUs/>
        </div>

        <DialogBox 
          dialogState={dialogState}
          setDialogState={setDialogState}
        />
          
        <Login 
          showLogin={showLogin} 
          setShowLogin={setShowLogin} 
          setShowForgotPassword={setShowForgotPassword} 
          setShowSignUp={setShowSignUp}
          formRef={formRef}
          setUser={setUser}
          setDialogState={setDialogState}
        />

        <SignUp 
          showSignUp={showSignUp} 
          setShowSignUp={setShowSignUp}
          setShowLogin={setShowLogin}
          formRef={formRef}
          setDialogState={setDialogState}
        />
        
        <ForgotPassword 
          showForgotPassword={showForgotPassword} 
          setShowForgotPassword={setShowForgotPassword}
          formRef={formRef}
          setDialogState={setDialogState}
        />
      </div> 
    </BrowserRouter>
  );
}

export default App;
