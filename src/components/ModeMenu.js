import React from "react";
import OptionsMenu from "./OptionsMenu";
import Quiz from "./Quiz";
import {Button, Row, Space, Card} from "antd"


const selectGame = (props) => {
  if (props.modes[1] === 0) {
    return (
      <div className="menu">
        <Space direction = "vertical">
          <Row className = "menu-row"><Button size = "large" block onClick={() => props.updateMode(1, 1)} type = "primary">Practice Spelling</Button></Row>
          <Row className = "menu-row"><Button size = "large" block onClick={() => props.updateMode(1, 2)}> Practice Sound Recognition </Button></Row>
          <Row className = "menu-row"><Button size = "large" block onClick={props.goBack} danger>Go Back</Button></Row>
        </Space>
      </div>
    );
  } else {
    return (<OptionsMenu {...props}/>);
  }
}

const loadGame = (props) => {
  if (props.gameOptions[0] === 0) {
    console.log('common');
    return (selectGame(props));
  } else {
    return (<Quiz
      {...props}
    />);
  }
}

const ModeMenu = (props) => {

  let modeNames = ["Main Menu", ["Practice", "Spelling"], ["Test", "Spelling"], ["Learn", "Sounds"]];

  return (
    <Card title={modeNames[props.modes[0]][0]}>
      {loadGame(props)}
    </Card>
  );
}

export default ModeMenu;