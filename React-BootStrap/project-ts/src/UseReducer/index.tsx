import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import UseReducerSimpleWorking from './SimpleWorking';
import UseReducerShareWithChildran from './ShareWithChildren';
import UseReducerWithSibling from './ShareWithSibling';

const pageTitle: Record<string, string> = {
  '/hook-usereducer/simple-working': 'Simple Working',
  '/hook-usereducer/share-children': 'Share with Children',
  '/hook-usereducer/share-sibling': 'Share with Sibling',
};

export default function UseReducerHook(): JSX.Element {
  const location = useLocation();

  return (
    <Container>
      <Row className="mb-3">
        <Col xs={12}>
          <h1>useReducer Hook - {pageTitle[location.pathname]}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Switch>
            <Route path="/hook-usereducer/simple-working" component={UseReducerSimpleWorking} exact />
            <Route path="/hook-usereducer/share-children" component={UseReducerShareWithChildran} exact />
            <Route path="/hook-usereducer/share-sibling" component={UseReducerWithSibling} exact />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}
