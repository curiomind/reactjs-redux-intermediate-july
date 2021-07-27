/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Logger } from '../Logger';

export default function Home(): JSX.Element {
  const history = useHistory();
  const match = useRouteMatch('/hook-usestate/simple-working');

  React.useEffect(() => {
    Logger.log('Home', match);
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="auto">
          <h1>Welcome to React Training</h1>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs="auto">
          <Button variant="primary" className="mb-3" onClick={() => history.replace('/hook-usestate/simple-working')}>
            UseState
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="primary" className="mb-3" onClick={() => history.push('/hook-useeffect/once-with-cleanup')}>
            UseEffect
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
