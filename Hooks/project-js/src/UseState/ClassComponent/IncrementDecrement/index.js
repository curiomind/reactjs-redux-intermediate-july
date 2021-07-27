import React from 'react';

export default class IncrementDecrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
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
            <button className="btn btn-primary mb-3" onClick={() => this.handleIncrement()}>
              Increment
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary mb-3" onClick={() => this.handleDecrement()}>
              Decrement
            </button>
          </div>
          <div className="col-auto">
            <label htmlFor="incrementDecrementResult" className="visually-hidden">
              Result
            </label>
            <input type="text" readOnly className="form-control" id="incrementDecrementResult" value={this.state.count} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
