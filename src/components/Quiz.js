import React, {Component} from "react";
import "../assets/style.css";
import QuizService from "../questionAPI";
import QuestionBox from "./QuestionBoxSpelling";
import Result from "./Result";
import {Card, Space, Progress} from "antd";


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      answers: [],
      score: 0,
      responses: 0,
      numberOfQuestions: props.gameOptions[0],
    };
  }



  getQuestions = () => {
    QuizService(this.state.numberOfQuestions, this.props.gameOptions[1]).then(options => {
      let randomAnswers = options.map((option) => {
        let answer = option.options[Math.floor(Math.random() * option.options.length)];
        return {
          "options": option.options,
          "questionId": option.questionId,
          "correctAnswer": answer,
        };
      });
      this.setState({
        questionBank: randomAnswers
      });
    });

  };

  computeAnswer = (answer) => {
    this.setState({
      score: this.state.score + answer
    });

    this.setState({
      responses: this.state.responses < this.state.numberOfQuestions ? this.state.responses + 1 : this.state.numberOfQuestions
    });
  }

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score:0,
      responses:0
    });
  }



  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <Card title = {(this.props.modes[1] === 1) ? "Spelling Quiz" : "Sound Quiz"} className="container">
        <Space direction="vertical" className="quizSpace">
          <Progress percent = {((this.state.score)/(this.state.numberOfQuestions))*100} steps = {this.state.numberOfQuestions} showInfo={false}/>
        {this.state.questionBank.length > 0 &&
        this.state.responses < this.state.numberOfQuestions &&
            <QuestionBox
              antwoord = {this.state.questionBank[this.state.responses].correctAnswer}
              options = {this.state.questionBank[this.state.responses].options}
              key={this.state.questionBank[this.state.responses].questionId}
              selected={answer => this.computeAnswer(answer)}
              modes = {this.props.modes}
            />

        }

        {this.state.responses === this.state.numberOfQuestions ? (
          <Result
            score={this.state.score}
            playAgain={this.playAgain}
            goBack = {this.props.goBack}
            numberOfQuestions = {this.state.numberOfQuestions}
            setGameoption = {this.props.setGameOptions}
          />
        ) : null}
        </Space>
      </Card>
    );
  }
}

export default Quiz;