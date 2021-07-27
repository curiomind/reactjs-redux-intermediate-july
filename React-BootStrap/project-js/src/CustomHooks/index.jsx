import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import useCustomState from './useCustomState';

export default function UseCustomeHook() {
  const { state, updateState } = useCustomState({ fullName: '' });

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Button variant="primary" className="mb-3" onClick={() => updateState('fullName', 'Proloy Chakroborty')}>
            Show Fullname
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>{state.fullName}</Col>
      </Row>
    </Container>
  );
}
