import React,{useState} from "react";
import axios from 'axios';
import './user-profile.css'

import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

function UserProfile({user, setShowChangePassword}){
  const[name,setName] = useState("");
  // const[gender,setGender] = useState(true);
  const[date,setDate] = useState("");
 
  const onSubmit = () => {
    const obj = {
      Full_name : name,
      Gender : Number(user.Gender),
      DayOfBirth : date.toString(),
      Role : Number(user.Role),
      Email : user.Email,
      Friends:user.Friends
    };
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    axios.patch('/user/'+ user.id , obj,config)
        .then(res => console.log(res.data));
}

    return(user)? (
      <>
        <div className="content">
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
                      <input type="text" name="fullname" className="o" placeholder={user.Full_name} onChange={(event)=>{ setName(event.target.value); }} /> 
                    </form>
                  </div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-md-3">
                    <h5>Sex:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <input type="radio" name="gender" className="a" id='gender_Male' /> Male
                  
                    <input type="radio" name="gender" className="a" id='gender_Female'   /> Female
                  </div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-md-3">
                    <h5>Date of birth:</h5>
                  </div>
                  <div className="col-md-3 text-secondary">
                    <input type="date" name="bday" className="o" value={user.DayOfBirth}  onChange={(event)=>{ setDate(event.target.value); }} />
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
                  onClick={onSubmit}
                  >
                    Save
                  </Button>
                  <Button 
                    className="btn btn-fill"
                    onClick={() => setShowChangePassword(true)}
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
