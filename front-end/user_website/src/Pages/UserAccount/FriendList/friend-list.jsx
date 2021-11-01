
import React from "react";
import './friend-list.css'
import AddFriend from './add-friend.jsx'
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";
import { Component } from "react";


class ListFriend extends Component{
  constructor(props){
    super(props);
    this.state = {
      isDisplayForm: false
    }
  }
  OpenForm = () =>{
      this.setState({
        isDisplayForm : !this.state.isDisplayForm
      });
  }
  onCloseForm =() =>{
    this.setState({
      isDisplayForm : !this.state.isDisplayForm,
      user:[]
    });
  }
  render(){
    var  {isDisplayForm} = this.state;
    var elmtaskform = isDisplayForm ? <AddFriend onCloseForm={this.onCloseForm} /> : '';
    return (
      <>
      <div className="content">
      <div>
        {elmtaskform}
      </div>
      <Row>
        <Col className="12">
          <Card>
          <CardHeader>
            <h1 className="title">List friend</h1>
            <button 
              className="btnAddFr"
              onClick={this.OpenForm}
            >      
            <i className="fas fa-user-plus"></i>
            </button>
          </CardHeader>
          <CardBody>
            <Table className="tablesorter" responsive>
            <thead className="text-primary">
                      <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Sex</th>
                        <th>Day of birth</th>
                        <th>Email</th>
                      </tr>
            </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Nhat</td>
                        <td>NhatproNo1</td>
                        <td>Male</td>
                        <td>10/10/2001</td>
                        <td>Nhat@gmail.com</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Nghia</td>
                        <td>NghiavipNo1</td>
                        <td>Male</td>
                        <td>11/11/2001</td>
                        <td>Nghia@gmail.com</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Kiet</td>
                        <td>Kietpro123</td>
                        <td>Male</td>
                        <td>01/01/2001</td>
                        <td>Kiet@gmail.com</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Hieu</td>
                        <td>Hiupro456</td>
                        <td>Male</td>
                        <td>01/01/2001</td>
                        <td>Hieu@gmail.com</td>
                      </tr>
                      <tr>
                      <td>5</td>
                        <td>Phuong</td>
                        <td>wayontop111</td>
                        <td>Male</td>
                        <td>01/01/2001</td>
                        <td>way@gmail.com</td>
                      </tr>
                    </tbody>
            </Table>
          </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
      </>
    );

  }

}

export default ListFriend;
