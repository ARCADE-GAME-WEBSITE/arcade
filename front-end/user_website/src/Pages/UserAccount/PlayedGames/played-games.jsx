import  { React, Component } from "react";

import './played-games.css'

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
} from "reactstrap";


class PlayedGames extends Component{
    render() {
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
                        <img src={require('../../../Assets/Images/Game/1.png').default} className="game-img" alt="" />
                        <div className="caption">
                            <h4>name</h4>
                            <p>
                            <a href="/" className="btn-play">Play</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="thumbnail">
                        <img src={require('../../../Assets/Images/Game/1.png').default} className="game-img" alt="" />
                        <div className="caption">
                            <h4>name</h4>
                            <p>
                            <a href="/" className="btn-play">Play</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="thumbnail">
                        <img src={require('../../../Assets/Images/Game/1.png').default} className="game-img" alt="" />
                        <div className="caption">
                            <h4>name</h4>
                            <p>
                            <a href="/" className="btn-play">Play</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="thumbnail">
                        <img src={require('../../../Assets/Images/Game/1.png').default} className="game-img" alt="" />
                        <div className="caption">
                            <h4>name</h4>
                            <p>
                            <a href="/" className="btn-play">Play</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="thumbnail">
                        <img src={require('../../../Assets/Images/Game/1.png').default} className="game-img" alt="" />
                        <div className="caption">
                            <h4>name</h4>
                            <p>
                            <a href="/" className="btn-play" >Play</a>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="thumbnail">
                        <img src={require('../../../Assets/Images/Game/1.png').default} className="game-img" alt="" />
                        <div className="caption">
                            <h4>name</h4>
                            <p>
                            <a href="/" className="btn-play" >Play</a>
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
}

export default PlayedGames;
