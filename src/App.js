import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { evaluate } from "mathjs";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      expression: "",
      result: 0,
      calculated: false
    };
  }

  handleCalculate = exp => {
    try {
      return evaluate(exp);
    } catch (error) {
      return "E";
    }
  };
  handleClick = event => {
    const { value } = event.target;

    switch (value) {
      case "+":
      case "-":
      case "*":
      case "/":
        if (/[-*+/]$/g.test(this.state.expression)) {
          this.setState(() => {
            let expressionArr = [...this.state.expression.split("")];
            expressionArr[expressionArr.length - 1] = value;
            return {
              expression: expressionArr.join("")
            };
          });
        } else {
          this.setState(prevState => {
            prevState.expression += value;
            return { expression: prevState.expression, calculated: false };
          });
        }
        break;
      case "calculate":
        this.setState(prevState => {
          return {
            expression:
              this.handleCalculate(prevState.expression) === "E"
                ? ""
                : this.handleCalculate(prevState.expression),
            result: this.handleCalculate(prevState.expression),
            calculated: true
          };
        });
        break;
      case "clear":
        this.setState({ expression: "", result: 0, calculated: false });
        break;
      default:
        if (this.state.calculated === true && /[\d()]/g.test(value)) {
          this.setState({ expression: value, calculated: false });
        } else {
          this.setState(prevState => {
            prevState.expression += value;
            return { expression: prevState.expression, calculated: false };
          });
        }
    }
  };
  render() {
    return (
      <div id="container">
        <div id="calculator">
          <div id="calculator-screen">
            <input
              name="expression"
              id="expression"
              value={this.state.expression}
              className="text-right px-2"
              readOnly
              disabled
            />
            <input
              name="result"
              id="result"
              value={this.state.result}
              className="text-right px-2"
              readOnly
              disabled
            />
          </div>
          <div id="calculator-body">
            <button
              value={0}
              id="zero"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              0
            </button>
            <button
              value={1}
              id="one"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              1
            </button>
            <button
              value={2}
              id="two"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              2
            </button>
            <button
              value={3}
              id="three"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              3
            </button>
            <button
              value={4}
              id="four"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              4
            </button>
            <button
              value={5}
              id="five"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              5
            </button>
            <button
              value={6}
              id="six"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              6
            </button>
            <button
              value={7}
              id="seven"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              7
            </button>
            <button
              value={8}
              id="eight"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              8
            </button>
            <button
              value={9}
              id="nine"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              9
            </button>
            <button
              value="+"
              id="add"
              className="btn btn-sm btn-primary"
              onClick={this.handleClick}
            >
              +
            </button>
            <button
              value="-"
              id="subtract"
              className="btn btn-sm btn-primary"
              onClick={this.handleClick}
            >
              -
            </button>
            <button
              value="*"
              id="multiply"
              className="btn btn-sm btn-primary"
              onClick={this.handleClick}
            >
              x
            </button>
            <button
              value="/"
              id="divide"
              className="btn btn-sm btn-primary"
              onClick={this.handleClick}
            >
              /
            </button>
            <button
              value="calculate"
              id="equals"
              className="btn btn-sm btn-success"
              onClick={this.handleClick}
            >
              =
            </button>
            <button
              value="clear"
              id="clear"
              className="btn btn-sm btn-danger"
              onClick={this.handleClick}
            >
              C
            </button>
            <button
              value="("
              id="left-bracket"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              (
            </button>
            <button
              value=")"
              id="right-bracket"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              )
            </button>
            <button
              value={this.state.result !== "E" ? this.state.result : ""}
              id="answer"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              Ans
            </button>
            <button
              value="."
              id="decimal"
              className="btn btn-sm btn-secondary"
              onClick={this.handleClick}
            >
              .
            </button>
          </div>
        </div>
        <small id="author-comment">
          Coded with <span>♥</span> by Lafen Lesley
        </small>
      </div>
    );
  }
}

export default App;
