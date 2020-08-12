import React, { Component } from "react";
import DrumPad from "./DrumPad";

class PadBank extends Component {
  render() {
    const { power, currentPadBank } = this.props;
    let padBank;
    power
      ? (padBank = currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad
              clipId={padBankArr[i].id}
              clip={padBankArr[i].url}
              keyTrigger={padBankArr[i].keyTrigger}
              keyCode={padBankArr[i].keyCode}
              power={power}
              updateDisplay={this.props.updateDisplay}
            />
          );
        }))
      : (padBank = currentPadBank.map((drumObj, i, padBankArr) => {
          return (
            <DrumPad
              clipId={padBankArr[i].id}
              clip="#"
              keyTrigger={padBankArr[i].keyTrigger}
              keyCode={padBankArr[i].keyCode}
              power={power}
            />
          );
        }));
    return <div className="pad-bank">{padBank}</div>;
  }
}
export default PadBank;
