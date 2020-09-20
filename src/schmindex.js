import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import QuizService from "./assets/index2"
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";


class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0,
      playing: true
    };
  }



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
        this.state.playing === true &&
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
          <Result score={this.state.score} playAgain={this.playAgain} quit={this.props.quit}/>
        ) : null}
        {this.state.playing === false ? <Menu/> : null}
      </div>
    );
  }
}

class Reverse extends Component {
  render(){
    return (
      console.log("sup")
    );
  }
}

class Menu extends Component {
  state = {
    mode : "menu"
  }

  startClassic = () => {
    this.setState({
      mode: "classic"
    });
  }

  startReverse = () => {
    this.setState({
      mode: "reverse"
    });
  }

  quit = () => {
    this.setState({
      mode: "menu"
    });
  }

  render() {
    return (
      <div className="menu">
        <h1>Pick your Poison</h1>
        <button onClick={this.startClassic}>Classic Mode</button>
        <button onClick={this.startReverse}>Reverse Mode</button>
        {this.state.mode === "classic" &&
        <Quiz quit={this.quit} />}
        {this.state.mode === "reverse" &&
        <Reverse/>}
      </div>
    );

  }
}

ReactDOM.render(
  <Menu/>,
  document.getElementById("root")
);