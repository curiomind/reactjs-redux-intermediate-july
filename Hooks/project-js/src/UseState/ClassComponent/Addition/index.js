import React from 'react';

export default class Addition extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOne: 0,
      numberTwo: 0,
      result: 0,
    };
  }

  handleNumberOneChange(event) {
    this.setState({ numberOne: parseInt(event.target.value, 10) });
  }

  handleNumberTwoChange(event) {
    this.setState({ numberTwo: parseInt(event.target.value, 10) });
  }

  calculate(event) {
    event.preventDefault();
    this.setState({ result: this.state.numberOne + this.state.numberTwo });
  }

  componentDidUpdate() {
    console.log('Addition rendered!');
  }

  render() {
    return (
      <React.Fragment>
        <h3>Addition</h3>
        <div className="row g-3 mb-3">
          <div className="col-auto">
            <label htmlFor="additionNumberOne" className="visually-hidden">
              First Number
            </label>
            <input
              type="text"
              className="form-control"
              id="additionNumberOne"
              onChange={this.handleNumberOneChange.bind(this)}
              value={this.state.numberOne}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="additionNumberTwo" className="visually-hidden">
              Second Number
            </label>
            <input
              type="text"
              className="form-control"
              id="additionNumberTwo"
              onChange={this.handleNumberTwoChange.bind(this)}
              value={this.state.numberTwo}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary mb-3" onClick={this.calculate.bind(this)}>
              Add
            </button>
          </div>
          <div className="col-auto">
            <label htmlFor="additionResult" className="visually-hidden">
              Result
            </label>
            <input type="text" readOnly className="form-control" id="additionResult" value={this.state.result} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
