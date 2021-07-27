import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch, useLocation } from 'react-router-dom';
import PureClassComponent from './ClassComponent';
import PureFunctionalComponent from './FuntionalComponent';

const pageTitle: Record<string, string> = {
  '/pure-component/class-component': 'Pure Class Component',
  '/pure-component/functional-component': 'Pure Functional Component',
};

export default function PureComponent(): JSX.Element {
  const location = useLocation();
  return (
    <Container>
      <Row className="mb-3">
        <Col xs={12}>
          <h1>{pageTitle[location.pathname]}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Switch>
            <Route path="/pure-component/class-component" component={PureClassComponent} exact />
            <Route path="/pure-component/functional-component" component={PureFunctionalComponent} exact />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}
