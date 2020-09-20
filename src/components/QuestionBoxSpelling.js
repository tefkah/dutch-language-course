import React, {useState} from "react";
import SoundBox from "./soundbox";
import yes from "../assets/correct.mp3"
import no from "../assets/incorrect.mp3"
import {Button, Space, Card, Row, Col, Input} from "antd";
import md5 from "md5";


const {Search} = Input;


const QuestionBoxSound = (props) => {
  let title = "Which one is " + props.antwoord + "?";
  const [answered, setAnswered] = useState(0);
  let shuffledOptions = props.options.sort(() => Math.random() - 0.5);
  let filenames = shuffledOptions.map( (option) => ("Nl-" + option + ".ogg"));
  console.log(filenames);
  let urls = filenames.map( (filename) => ("https://upload.wikimedia.org/wikipedia/commons/" + md5(filename).substring(0,1) + "/" + md5(filename).substring(0,2) + "/" + filename));
  let ding = new Audio(yes);
  let dong = new Audio(no);
  const buzzer = (option) => {
    (option === props.antwoord) ? ding.play() : dong.play();
  }
  return (
    <Row>
      <Card type = "inner" className="questionBox" title={title} size="small">
        <Row /*gutter = {[urls.length * 6 + 6, 18]}*/>
          {urls.map((url, i) => {
            return (
              <Col span={24/urls.length}>
                <SoundBox antwoord = {shuffledOptions[i]} url = {url}/>
              </Col>
            );
          })}
        </Row>
        <Row /*gutter = {[urls.length * 6 + 6, 18]}*/>
          {urls.map((url, i) => {
            return (
              <Col span={24/urls.length}>
                <Button
                        className="answerBtn"
                        onClick={() => {
                          props.selected(+(shuffledOptions[i]===props.antwoord));
                          setAnswered(i+1);
                          buzzer(shuffledOptions[i]);
                        }
                        }
                        disabled={+(answered)}
                        shape = "round"
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

const QuestionBoxSpelling = (props) => {
    let shuffledOptions = props.options.sort(() => Math.random() - 0.5);
    let title = "Is it " + shuffledOptions[0] + " or " + shuffledOptions[1] + "?";
    const [answered, setAnswered] = useState(0);
    let filename = "Nl-" + props.antwoord + ".ogg";
    let url = "https://upload.wikimedia.org/wikipedia/commons/" + md5(filename).substring(0,1) + "/" + md5(filename).substring(0,2) + "/" + filename;
    let ding = new Audio(yes);
    let dong = new Audio(no);
    const buzzer = (option) => {
      (option === props.antwoord) ? ding.play() : dong.play();
    }

  return (
      <Row>
        <Card type = "inner" className="questionBox" title={(!props.modes[2]) ? title : "What is being said?"} size="small">
          <Space direction="horizontal">
            <SoundBox antwoord = {props.antwoord} url = {url}/>
            {(!props.modes[2]) ?
            shuffledOptions.map((option, i) =>
            {
              return(
              <Button block
              onClick={() => {
              props.selected(+(option === props.antwoord));
              setAnswered(i + 1);
              buzzer(option);
            }
            }
              disabled={+(answered)}
              type={(answered === i + 1) ? "primary" : "default"}
              >
              {option}
              </Button>
              );
            }) :
              <Search placeholder="Input Answer"
                      onSearch={(value) => {
                        props.selected(+(value.toLowerCase() === props.antwoord));
                        console.log(value);
                        setAnswered(1);
                        buzzer(value.toLowerCase());
                      }}
                      disabled={+(answered)}
              />
            }



          </Space>
        </Card>
      </Row>
    );
};

const QuestionBox = (props) => {
  return (
    (props.modes[1] === 1) ? QuestionBoxSpelling(props) : QuestionBoxSound(props)
  );
}

export default QuestionBox;