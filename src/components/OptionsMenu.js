import React, {useState} from "react";
import {Slider, Button, Space, Row, Checkbox, Select} from "antd";

const qNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const { Option } = Select;
const vowelList = ["a", "aa", "e", "ee", "i", "ie", "o", "oo", "u", "uu", "au/ou", "ei/ij", "eu", "ui"];


const OptionsMenu = (props) => {
  const [number, setNumber] = useState(5);
  const [vowel1, setVowel1] = useState("a");
  const [vowel2, setVowel2] = useState( "aa");


  return (
    <div className="options">
      <div className = "menu">
      <Space direction="vertical">

        <Row className = "menu-row"><h2>How many questions do you want?</h2></Row>
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
        <Row className = "menu-row"><h2>Which vowels do you want to practice?</h2></Row>
          <Row className="menu-row">
            <div className="vowel-select">
              <Select defaultValue="a" onChange={value => setVowel1(value)}>
                {vowelList.map((v) => {
                  return(
                    <Option value = {v}>
                      {v}
                    </Option>
                  )
                })}
              </Select>
              <span> vs </span>
              <Select defaultValue="aa" onChange={value => setVowel2(value)}>
                {vowelList.map((v) => {
                  return(
                    <Option value = {v}>
                      {v}
                    </Option>
                  )
                })}
              </Select>
            </div>
          </Row>
        {props.modes[1] === 1 &&
        <Row className="menu-row">
        <Checkbox
          onChange={() => {(props.updateMode(props.modes[0], props.modes[1], !props.modes[2]))}}
        >
          Hard Mode (type answers)
        </Checkbox></Row>}

        <Row className = "menu-row"><Button block size = "large" type="primary" onClick={()=>{props.setGameOptions(number, vowel1 + ", " + vowel2)}}>Let's  Gooo</Button></Row>
        <Row className = "menu-row"><Button block size = "large" danger onClick={props.goBack}>Go Back</Button></Row>
      </Space>
      </div>
    </div>
  );
}


export default OptionsMenu;