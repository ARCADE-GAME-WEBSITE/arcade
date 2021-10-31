import React, {useEffect} from "react";

import './user-profile.css'
import axios from 'axios';
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Row,
  Col,
} from "reactstrap";


function UserProfile({user}){

  
  // setName= (event) => {
  //   this.setState({Full_name: event.target.value});
  // }
  // setGender= (event) => {
  //   this.setState({Gender: event.target.value});
  // }
  // setDate= (event) => {
  //   this.setState({Date: event.target.value});
  // }
  // submitSave = () =>{
  //   console.log(this.state);
  // }
  // componentDidMount() {
  //   axios.get('/user')
  //        .then(res => {
  //           const user = res.data;
  //           this.setState({ user: user.user });
  //         })
  //        .catch(error => console.log(error));
  // };


 
  // const OpenForm = () =>{
  //     this.setState({
  //       isDisplayFormChangePass : !this.state.isDisplayFormChangePass
  //     });
  // }
  // const onCloseForm =() =>{
  //   this.setState({
  //     isDisplayFormChangePass : !this.state.isDisplayFormChangePass
  //   });
  // }

    // var {isDisplayFormChangePass} = this.state;
    // var show = isDisplayFormChangePass ? <ChangePassword onCloseForm={this.onCloseForm} /> : '';
    
    return(user)? (
      <>
        <div className="content">
          <div>
            {/* {show} */}
          </div>
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h1 className="title">Profile</h1>
                </CardHeader>
                  <div className="row Card-space" >
                  
                  <div className="col-md-3 " key = {user.id}  >
                    <h5>Full Name:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <form>
                      <input type="text" name="fullname" className="o" value={user.Full_name} /> 
                    </form>
                  </div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-md-3">
                    <h5>Sex:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <input type="radio" name="gender" className="a"   /> Male
                    <input type="radio" name="gender" className="a" /> Female
                  </div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-md-3">
                    <h5>Date of birth:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <input type="date" name="bday" className="o"   />
                  </div>
                  </div>
                  <hr />
                  <div className="row ">
                  <div className="col-md-3">
                    <h5>Email:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <form>
                      <input type="text" name="email" className="o"  value={user.Email}/>
                    </form>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Password:</h5>
                  </div>
                  <div className="col-md-3 text-secondary"  >
                    <p>*************************</p>
                  </div>
                </div>
            
                <CardFooter>
                  <Button className="btn btn-fill"
                  >
                    Save
                  </Button>
                  <Button 
                    className="btn btn-fill"   
                   
                  >
                    Change Password
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    ):null;
}

export default UserProfile;
