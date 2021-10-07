
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";
function GamePlayed() {
  return (
    <>
    <div className="content">
    <Row>
      <Col className="12">
        <Card>
        <CardHeader>
          <h1 className="title">Game Played</h1>
        </CardHeader>
        <CardBody>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail">
              <img src={require("assets/img/channels4_profile.jpg").default} className="game-img" alt="" />
              <div className="caption">
                <h3>name</h3>
                <p>
                  <a href="#" className="btn btn-default">Play</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail">
              <img src={require("assets/img/logo-img.png").default} className="game-img" alt="" />
              <div className="caption">
                <h3>name</h3>
                <p>
                  <a href="#" className="btn btn-default">Play</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail">
              <img src={require("assets/img/react-logo.png").default} className="game-img" alt="" />
              <div className="caption">
                <h3>name</h3>
                <p>
                  <a href="#" className="btn btn-default">Play</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail">
              <img src={require("assets/img/Video-Game-Controller-Icon-IDV-green.svg.png").default} className="game-img" alt="" />
              <div className="caption">
                <h3>name</h3>
                <p>
                  <a href="#" className="btn btn-default">Play</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail">
              <img src={require("assets/img/unnamed.png").default} className="game-img" alt="" />
              <div className="caption">
                <h3>name</h3>
                <p>
                  <a href="#" className="btn btn-default">Play</a>
                </p>
              </div>
            </div>
          </div>
        </CardBody>
        </Card>
      </Col>
    </Row>
    </div>
    </>
  );
}

export default GamePlayed;
