import React from 'react';

export default class Subtraction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOne: 0,
      numberTwo: 0,
      result: 0,
    };
  }

  componentDidUpdate() {
    console.log('Subtraction rendered!');
  }

  render() {
    return (
      <React.Fragment>
        <h3>Addition</h3>
        <div className="row g-3 mb-3">
          <div className="col-auto">
            <label htmlFor="subtractionNumberOne" className="visually-hidden">
              First Number
            </label>
            <input
              type="text"
              className="form-control"
              id="subtractionNumberOne"
              onChange={(event) => this.setState({ numberOne: parseInt(event.target.value, 10) })}
              value={this.state.numberOne}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="subtractionNumberTwo" className="visually-hidden">
              Second Number
            </label>
            <input
              type="text"
              className="form-control"
              id="subtractionNumberTwo"
              onChange={(event) => this.setState({ numberTwo: parseInt(event.target.value, 10) })}
              value={this.state.numberTwo}
            />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-primary mb-3"
              onClick={(event) => {
                event.preventDefault();
                this.setState({ result: this.state.numberOne - this.state.numberTwo });
              }}>
              Add
            </button>
          </div>
          <div className="col-auto">
            <label htmlFor="subtractionResult" className="visually-hidden">
              Result
            </label>
            <input type="text" readOnly className="form-control" id="subtractionResult" value={this.state.result} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
