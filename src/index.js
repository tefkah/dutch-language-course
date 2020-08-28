import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import QuizService from "./questionAPI"
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

class Quiz extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };

  getQuestions = () => {
    QuizService().then(options => {
      this.setState({
        questionBank: options
      });
    });
  };

  computeAnswer = (answer) => {
      this.setState({
        score: this.state.score + answer
      });

    this.setState({
      responses: this.state.responses < 1 ? this.state.responses + 1 : 1
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
      <div className="container">
        <div className="title">Suppp</div>
        {this.state.questionBank.length > 0 &&
        this.state.responses < 1 &&
        this.state.questionBank.map(
          ({options, questionId}) => (
                <QuestionBox
                  question = {options}
                  options = {options}
                  key={questionId}
                  selected={answer => this.computeAnswer(answer)}
                />
              )
            )}
        {this.state.responses === 1 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(
  <Quiz/>,
  document.getElementById("root")
);