import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Logger } from '../../Logger';
import TextField from './TextField';

export default function UseImperativeHandle() {
  const textFieldRef = React.useRef(null);

  const handleBlur = () => {
    Logger.log(textFieldRef.current);
    textFieldRef.current.blur();
  };

  const hancleClick = () => {
    Logger.log(textFieldRef.current);
    textFieldRef.current.changeLabelColor('#ff0000');
  };

  Logger.log('I Renderded');

  return (
    <>
      <Row>
        <Col xs={12}>
          <TextField
            label="Document Title"
            id="documentTitle"
            placeholder="Enter document title"
            type="text"
            ref={textFieldRef}
            onBlur={handleBlur}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Button variant="primary" className="mb-3" onClick={hancleClick}>
            Change Label Color
          </Button>
        </Col>
      </Row>
    </>
  );
}
