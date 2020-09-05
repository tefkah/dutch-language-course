import React, {useState} from "react";
import {Slider, Button, Space, } from "antd";

const qNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const OptionsMenu = (props) => {
  const [number, setNumber] = useState(5);
  return (
    <div className="options">
      <Space direction="vertical" style={{width : '30%'}} >
      <h2>How many question do you want</h2>
      <div>
        <Slider
          defaultValue={5}
          min={0}
          max={Object.keys(qNumber).length - 1}
          onChange={(value) => {setNumber(value+1)}}
          marks={qNumber}
          step={null}
          tipFormatter={value => qNumber[value]}
        />
      </div>

      <Button block size = "large" type="primary" onClick={()=>{props.setGameOptions(number)}}>Let's  Gooo</Button>
      <Button block size = "large" danger onClick={props.goBack}>Go Back</Button>
      </Space>
    </div>
  );
}


export default OptionsMenu;