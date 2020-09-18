import React, {useState} from "react";
import SoundBox from "./soundbox";
import {Button, Space, Card, Row, Col} from "antd";
import md5 from "md5";



const QuestionBoxSpelling = (props) => {
  let title = "Which one is " + props.antwoord + "?";
  const [answered, setAnswered] = useState(0);

  let filenames = props.options.map( (option) => ("Nl-" + option + ".ogg"));
  console.log(filenames);
  let urls = filenames.map( filename => ("https://upload.wikimedia.org/wikipedia/commons/" + md5(filename).substring(0,1) + "/" + md5(filename).substring(0,2) + "/" + filename));
  return (
    <Row>
      <Card type = "inner" className="questionBox" title={title} size="small">
        <Row gutter = {[urls.length * 6 + 6]}>
        {urls.map((url, i) => {
          return (
            <Col span={6}>
              <SoundBox antwoord = {props.options[i]} url = {url}/>
            </Col>
          );
        })}
        </Row>
        <Row gutter = {[urls.length * 6 + 6]}>
          {urls.map((url, i) => {
            return (
              <Col span={6}>
                <Button block
                        className="answerBtn"
                        onClick={() => {
                          props.selected(+(props.options[0]===props.antwoord));
                          setAnswered(i+1);
                        }
                        }
                        disabled={+(answered)}
                >
                  {i+1}
                </Button>
              </Col>
            );
          })}
        </Row>
      </Card>
    </Row>
  );
};

export default QuestionBox;