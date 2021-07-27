import React from 'react';

export default class TextField extends React.Component {
  componentDidMount() {
    console.log(`${this.props.label}: Loaded`);
  }

  componentDidUpdate() {
    console.log(`${this.props.label}: Updated`);
  }

  componentWillUnmount() {
    console.log(`${this.props.label}: Unloaded`);
  }

  render() {
    const { id, type, label, placeholder, required, onChange } = this.props;

    return (
      <div className="mb-3">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input type={type} className="form-control" id={id} placeholder={placeholder} required={required} onChange={onChange} />
      </div>
    );
  }
}
