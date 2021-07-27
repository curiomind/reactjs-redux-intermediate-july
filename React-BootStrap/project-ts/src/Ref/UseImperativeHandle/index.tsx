import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Logger } from '../../Logger';
import TextField, { ImperativeRef } from './TextField';

export default function UseImperativeHandle(): JSX.Element {
  const textFieldRef = React.useRef<ImperativeRef>(null);

  const handleBlur = () => {
    Logger.log(textFieldRef.current);
    if (textFieldRef && textFieldRef.current) {
      textFieldRef.current.blur();
    }
  };

  const hancleClick = () => {
    Logger.log(textFieldRef.current);
    if (textFieldRef && textFieldRef.current) {
      textFieldRef.current.changeLabelColor('#ff0000');
    }
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
