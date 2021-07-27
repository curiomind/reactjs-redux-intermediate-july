import React from 'react';

export default class Subtraction extends React.Component {
  constructor(props) {
    super(props);

    this.numberOneInput = null;
    this.numberTwoInput = null;
    this.resultInput = null;

    this.numberOneRef = (element) => {
      this.numberOneInput = element;
    };
    this.numberTwoRef = (element) => {
      this.numberTwoInput = element;
    };
    this.resultRef = (element) => {
      this.resultInput = element;
    };
  }

  calculate(event) {
    event.preventDefault();
    if (this.resultInput && this.numberOneInput && this.numberTwoInput) {
      this.resultInput.value = parseInt(this.numberOneInput.value, 10) - parseInt(this.numberTwoInput.value, 10);
    }
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
            <input type="text" className="form-control" id="subtractionNumberOne" ref={this.numberOneRef.bind(this)} />
          </div>
          <div className="col-auto">
            <label htmlFor="subtractionNumberTwo" className="visually-hidden">
              Second Number
            </label>
            <input type="text" className="form-control" id="subtractionNumberTwo" ref={this.numberTwoRef.bind(this)} />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary mb-3" onClick={this.calculate.bind(this)}>
              Add
            </button>
          </div>
          <div className="col-auto">
            <label htmlFor="subtractionResult" className="visually-hidden">
              Result
            </label>
            <input type="text" readOnly className="form-control" id="subtractionResult" ref={this.resultRef.bind(this)} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
