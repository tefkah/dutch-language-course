import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const repeatSound = 'Repeat Sound';
const opt1 = 'something';
const opt2 = 'else';


class Clicky extends Component {
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }

    render() {
        return (
            <div>
                <button onClick={this.playAudio}>
                    <span>Play Audio</span>
                </button>
                <audio className="audio-element">
                    <source src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Nl-aap.ogg"></source>
                </audio>
            </div>
        )
    }
}



class Game extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="game">
                <h1>Hey Vio good luck today</h1>
                <div className="Interface">
                    <Clicky/>
                    <Clicky/>
                    <Clicky/>
                </div>
            </div>
        )
    }
}
/*
const button2 = (
    <button>{opt2}</button>
);

const buttonRepeat = (
    <button>{repeatSound}</button>
);

const element = (
    <div>{button1}
        {buttonRepeat}
        {button2}
    </div>
    );

*/
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);








