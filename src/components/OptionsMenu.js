import React, {useState} from "react";
import {Slider, Button, Space, Row, Checkbox} from "antd";

const qNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const OptionsMenu = (props) => {
  const [number, setNumber] = useState(5);
  return (
    <div className="options">
      <div className = "menu">
      <Space direction="vertical">

        <Row className = "menu-row"><h2>How many questions do you want</h2></Row>
          <Row className = "menu-row">
        <Slider
          defaultValue={5}
          min={0}
          max={Object.keys(qNumber).length - 1}
          onChange={(value) => {setNumber(value+1)}}
          marks={qNumber}
          step={null}
          tipFormatter={value => qNumber[value]}
        />
          </Row>

        {props.modes[1] === 1 &&
        <Row className="menu-row">
        <Checkbox
          onChange={() => {(props.updateMode(props.modes[0], props.modes[1], !props.modes[2]))}}
        >
          Hard Mode (type answers)
        </Checkbox></Row>}

        <Row className = "menu-row"><Button block size = "large" type="primary" onClick={()=>{props.setGameOptions(number)}}>Let's  Gooo</Button></Row>
        <Row className = "menu-row"><Button block size = "large" danger onClick={props.goBack}>Go Back</Button></Row>
      </Space>
      </div>
    </div>
  );
}


export default OptionsMenu;