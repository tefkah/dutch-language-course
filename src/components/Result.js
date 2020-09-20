import React from "react";
import {Button, Space, Row} from "antd";

const Result = (props) => (
  <div className="menu">
  <Space direction="vertical" className="score-board">
    <Row className = "menu-row"><span className="score">You scored {props.score}/ {props.numberOfQuestions} correct answers, ya ding dong</span></Row>
      <Row className = "menu-row"><Button size = "large" block type = "primary" className="playBtn" onClick ={props.playAgain}>
      Play Again, if you dare...
      </Button></Row>
    <Row className = "menu-row"><Button size="large" block onClick={() => {props.setGameoption(0)}}>Change Settings</Button></Row>
    <Row className = "menu-row"><Button size = "large" block type = "primary" danger className="quitButton" onClick={props.goBack}> Quit </Button></Row>
  </Space>
  </div>
);

export default Result;