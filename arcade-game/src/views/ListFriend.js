
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";

function ListFriend() {
  return (
    <>
    <div className="content">
    <Row>
      <Col className="12">
        <Card>
        <CardHeader>
          <h1 className="title">List friend</h1>
        </CardHeader>
        <CardBody>
          <Table className="tablesorter" responsive>
          <thead className="text-primary">
                    <tr>
                      <th>STT</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Status</th>
                    </tr>
          </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nhat</td>
                      <td>NhatproNo1</td>
                      <td>Online</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Nghia</td>
                      <td>NghiavipNo1</td>
                      <td>Offline</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Kiet</td>
                      <td>Kietpro123</td>
                      <td>Online</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Hieu</td>
                      <td>Hiupro456</td>
                      <td>Offline</td>
                    </tr>
                    <tr>
                    <td>5</td>
                      <td>Phuong</td>
                      <td>wayontop111</td>
                      <td>Ofline</td>
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

export default ListFriend;
