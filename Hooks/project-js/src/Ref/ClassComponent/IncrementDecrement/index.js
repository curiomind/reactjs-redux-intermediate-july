import React from 'react';

export default class IncrementDecrement extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef(0);
    this.resultRef = React.createRef();
  }

  handleIncrement(event) {
    event.preventDefault();
    this.countRef.current++;
    this.resultRef.current.value = this.countRef.current;
  }

  handleDecrement(event) {
    event.preventDefault();
    this.countRef.current--;
    this.resultRef.current.value = this.countRef.current;
  }

  componentDidUpdate() {
    console.log('IncrementDecrement rendered!');
  }

  render() {
    return (
      <React.Fragment>
        <h3>Increment / Decrement</h3>
        <div className="row g-3 mb-3">
          <div className="col-auto">
            <button className="btn btn-primary mb-3" onClick={this.handleIncrement.bind(this)}>
              Increment
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary mb-3" onClick={this.handleDecrement.bind(this)}>
              Decrement
            </button>
          </div>
          <div className="col-auto">
            <label htmlFor="incrementDecrementResult" className="visually-hidden">
              Result
            </label>
            <input type="text" readOnly className="form-control" id="incrementDecrementResult" ref={this.resultRef} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
