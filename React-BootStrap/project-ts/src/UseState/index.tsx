import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import UseStateSimpleNotWorking from './SimpleNotWorking';
import UseStateSimpleWorking from './SimpleWorking';
import UseStateShareWithChildren from './ShareWithChildren';
import UseStateShareWithSibling from './ShareWithSibling';
import StateInClassComponent from './ClassComponent';
import Notfound from './404';

const pageTitle: Record<string, string> = {
  '/hook-usestate/simple-not-working': 'Simple Not Working',
  '/hook-usestate/simple-working': 'Simple Working',
  '/hook-usestate/share-children': 'Share with Children',
  '/hook-usestate/share-sibling': 'Share with Sibling',
  '/hook-usestate/class-component': 'Class Component',
};

export default function UseStateHook(): JSX.Element {
  const location = useLocation();

  return (
    <Container>
      <Row className="mb-3">
        <Col xs={12}>
          <h1>useState Hook - {pageTitle[location.pathname]}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Switch>
            <Route path="/hook-usestate/simple-not-working" component={UseStateSimpleNotWorking} exact />
            <Route path="/hook-usestate/simple-working" component={UseStateSimpleWorking} exact />
            <Route path="/hook-usestate/share-children" component={UseStateShareWithChildren} exact />
            <Route path="/hook-usestate/share-sibling" component={UseStateShareWithSibling} exact />
            <Route path="/hook-usestate/class-component" component={StateInClassComponent} exact />
            <Route path="*" component={Notfound} exact />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}
