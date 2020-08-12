import React, { Component } from "react";

const inactiveStyle = {
  backgroundColor: "grey",
  marginTop: 10,
  boxShadow: "3px 3px 5px black",
};
const activeStyle = {
  backgroundColor: "lime",
  boxShadow: "0 3px lime",
  height: 77,
  marginTop: 13,
};

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  activatePad() {
    if (this.props.power) {
      this.state.padStyle.backgroundColor === "lime"
        ? this.setState({
            padStyle: inactiveStyle,
          })
        : this.setState({
            padStyle: activeStyle,
          });
    } else {
      this.state.padStyle.marginTop === 13
        ? this.setState({
            padStyle: inactiveStyle,
          })
        : this.setState({
            padStyle: activeStyle,
          });
    }
  }
  playSound(e) {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, " "));
  }
  render() {
    return (
      <div
        id={this.props.clipId}
        className="drum-pad"
        onClick={this.playSound}
        style={this.state.padStyle}
      >
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.clip}
        ></audio>
        {this.props.keyTrigger}
      </div>
    );
  }
}
export default DrumPad;
