import React, {Component} from "react";
import ReactDOM from "react-dom";
import MainMenu from "./components/MainMenu";
import ModeMenu from "./components/ModeMenu";
import {PageHeader, Layout} from "antd";

const {Header, Content, Footer} = Layout;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proficiency: Array(6).fill(null),
      modes: [0, 0, false],
      selection: [],
      qBank: [],
      settings: [],
      gameOptions: [0],
      points: [],
    };
  }

  updateMode = (a, b=0, c = false) => {
    let modes = this.state.modes.slice();
    modes[0] = a;
    modes[1] = b;
    modes[2] = c;
    this.setState({
      modes: modes,
    })
  }

  setGameOptions = (numberOfQuestions) => {
    let gameOptions = this.state.gameOptions.slice();
    gameOptions[0] = numberOfQuestions;
    this.setState({
      gameOptions: gameOptions,
    })
  }

  goBack = () => {
    let modes = this.state.modes.slice();
    if(modes[1] === 0){
      modes[0] = 0;
    } else {
      modes[1] = 0;
    }
    this.setGameOptions(0);
    this.setState({
      modes: modes,
    })
  }

  changeSettings = () => {
    this.setGameOptions(0);
  }

  modeSwitch = (modeArray) => {
    /* if(modeArray[1] === 0) { */
        if (modeArray[0] === 0) {
          return (
            <MainMenu
              updateMode={this.updateMode}
            />
          );
        } else {
          return (
            <ModeMenu
              modes = {modeArray}
              goBack={this.goBack}
              updateMode={this.updateMode}
              setGameOptions = {this.setGameOptions}
              gameOptions = {this.state.gameOptions}
            />
          );

      }
    /* } else {
      switch (modeArray[1]) {
        case 1:
          return (
            <Quiz goBack = {this.goBack} />
          );
        case 0: {
          return(
            this.modeSwitch(modeArray[0])
          );
        }
        default: {
          return(
            this.modeSwitch(modeArray[0])
          );
        }
      }


    } */
}



  render () {
    return(
      <div className="Game">
            <PageHeader title="Dutch Vowel App" subTitle="Made by Thomas Jorna"/>

            {this.modeSwitch(this.state.modes)}

      </div>
    );
  }
}


ReactDOM.render(
  <Game/>,
  document.getElementById("root")
);