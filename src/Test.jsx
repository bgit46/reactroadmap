import React from "react";

export default class Test extends React.Component {

  state = {
    number1: "",
    number2: "",
    result: "",
    errorMsg: ""
  };


  onInputChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;

    const {name,value} = event.target;

    this.setState({
      [name]: value
    });
  }

  handleOperation = (operation) => {
    // const number1 = parseInt(this.state.number1, 10);
    // const number2 = parseInt(this.state.number2, 10);

    let {number1, number2} = this.state;
    number1 = parseInt(number1, 10);
    number2 = parseInt(number2, 10);

    let result;
    if (operation === "add") {
      result = number1 + number2;
    } else if (operation === "subtract") {
      result = number1 - number2;
    }

    if (isNaN(result)) {
      this.setState({
        errorMsg: "Please enter valid numbers."
      });
    } else {
      this.setState({
        errorMsg: "",
        result
      });
    }
  }

  render() {
    return (
      <div>
        <div className="input-section">
          {this.state.errorMsg && (
            <p className="error-msg">{this.state.errorMsg}</p>
          )}
          <label>First Number</label>
          <input
            type="text"
            name="number1"
            placeholder="Enter a number"
            value={this.state.number1}
            onChange={this.onInputChange}
          />
        </div>
        <div className="input-section">
          <label>Second Number</label>
          <input
            type="text"
            name="number2"
            placeholder="Enter a number"
            value={this.state.number2}
            onChange={this.onInputChange}
          />
        </div>
        <div className="result-section">
          Result: <span className="result">{this.state.result}</span>
        </div>
        <button type="button" className="btn" onClick={() => this.handleOperation('add')}>
          Add
        </button>
        <button type="button" className="btn" onClick={() => this.handleOperation('subtract')}>
          Subtract
        </button>
      </div>
    );
  }
}
