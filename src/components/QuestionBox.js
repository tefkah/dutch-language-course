import React, {useState} from "react";
import SoundBox from "./soundbox";
import {Button, Space, Card, Row} from "antd";



const QuestionBoxSpelling = (props) => {
    let title = "Is it " + props.options[0] + " or " + props.options[1] + "?";
    const [answered, setAnswered] = useState(0);

    return (
      <Row>
        <Card type = "inner" className="questionBox" title={title} size="small">
          <Space direction="horizontal">
            <SoundBox antwoord = {props.antwoord} url = {props.url}/>
            <Button block
              className="answerBtn"
              onClick={() => {
                props.selected(+(props.options[0]===props.antwoord));
                setAnswered(1);
                  }
                }
              disabled={+(answered)}
              type={(answered===1) ? "primary" : "default"}
            >
              {props.options[0]}
            </Button>
            <Button block
              className="answerBtn"
              onClick={() => {
                props.selected(+(props.options[1]===props.antwoord));
                setAnswered(2);
                }
              }
              disabled={+(answered)}
              type={(answered===2) ? "primary" : "default"}
            >
              {props.options[1]}
            </Button>
          </Space>
        </Card>
      </Row>
    );
};

export default QuestionBoxSpelling;