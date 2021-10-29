
import React from "react";

import './user-profile.css'
import ChangePassword from './change-password.jsx'

import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Row,
  Col,
} from "reactstrap";
import { Component } from "react";

class UserProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
      isDisplayFormChangePass: false,
      user : props.user
    }
  }
 

  OpenForm = () =>{
      this.setState({
        isDisplayFormChangePass : !this.state.isDisplayFormChangePass
      });
  }
  onCloseForm =() =>{
    this.setState({
      isDisplayFormChangePass : !this.state.isDisplayFormChangePass
    });
  }
  
  render(){
    var {isDisplayFormChangePass} = this.state;
    var show = isDisplayFormChangePass ? <ChangePassword onCloseForm={this.onCloseForm} /> : '';
    return (this.state.user ?(
      <>
        <div className="content">
          <div>
            {show}
          </div>
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h1 className="title">Profile</h1>
                </CardHeader>
                  <div className="row Card-space" >
                  
                  <div className="col-md-3 " key = {this.state.user.id} >
                    <h5>Full Name:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <form>
                      <input type="text" name="fullname" className="o" value={this.state.user.Full_name} /> 
                    </form>
                  </div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-md-3">
                    <h5>Sex:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <input type="radio" name="gender" className="a" checked={this.state.user.Gender ? 'checked' : ''}  /> Male
                    <input type="radio" name="gender" className="a" /> Female
                  </div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-md-3">
                    <h5>Date of birth:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <input type="date" name="bday" className="o" value={this.state.user.DateOfBirth}  />
                  </div>
                  </div>
                  <hr />
                  <div className="row ">
                  <div className="col-md-3">
                    <h5>Email:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <form>
                      <input type="text" name="email" className="o" value={this.state.user.Email} />
                    </form>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Password:</h5>
                  </div>
                  <div className="col-md-3 text-secondary"  >
                    <p>*******************</p>
                  </div>
                </div>
            
                <CardFooter>
                  <Button className="btn btn-fill" >
                    Save
                  </Button>
                  <Button 
                    className="btn btn-fill"   
                    onClick={this.OpenForm}
                  >
                    Change Password
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    ):null);
  }
}


export default UserProfile;
