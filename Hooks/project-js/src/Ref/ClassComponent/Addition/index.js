import React from 'react';

export default class Addition extends React.Component {
  constructor(props) {
    super(props);

    this.numberOneRef = React.createRef();
    this.numberTwoRef = React.createRef();
    this.resultRef = React.createRef();
  }

  calculate(event) {
    event.preventDefault();
    this.resultRef.current.value = parseInt(this.numberOneRef.current.value, 10) + parseInt(this.numberTwoRef.current.value, 10);
  }

  componentDidMount() {
    this.numberOneRef.current.value = 0;
    this.numberTwoRef.current.value = 0;
    this.resultRef.current.value = 0;
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
            <input type="text" className="form-control" id="additionNumberOne" ref={this.numberOneRef} />
          </div>
          <div className="col-auto">
            <label htmlFor="additionNumberTwo" className="visually-hidden">
              Second Number
            </label>
            <input type="text" className="form-control" id="additionNumberTwo" ref={this.numberTwoRef} />
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
            <input type="text" readOnly className="form-control" id="additionResult" ref={this.resultRef} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
