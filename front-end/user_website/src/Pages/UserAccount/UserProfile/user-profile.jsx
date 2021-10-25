
import React from "react";

import './user-profile.css'

import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

function UserProfile() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h1 className="title">Profile</h1>
              </CardHeader>
                <div className="row Card-space">
                <div className="col-md-3 ">
                  <h5>Full Name:</h5>
                </div>
                <div className="col-md-3 text-secondary">
                  <form>
                    <input type="text" name="fullname" className="o" />
                  </form>
                </div>
                </div>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <h5>Sex:</h5>
                </div>
                <div className="col-md-3 text-secondary">
                  <input type="radio" value="Male" name="gender" className="a"  /> Male
                  <input type="radio" value="Female" name="gender" className="a" /> Female
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
                    <input type="text" name="email" className="o" />
                  </form>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-3">
                  <h5>Phone:</h5>
                </div>
                <div className="col-md-3 text-secondary">
                  <form>
                    <input type="text" name="phone" className="o"  />
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
                <Button className="btn btn-fill"   >
                  Change Password
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
