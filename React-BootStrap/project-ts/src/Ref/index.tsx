import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import RefForClassComponent from './ClassComponent';
import RefForFunctionalComponent from './FunctionalComponent';
import PassingRef from './PassingRef';
import UseImperativeHandle from './UseImperativeHandle';
import ForwardRefHOC from './ForwardRefHOC';

const pageTitle: Record<string, string> = {
  '/ref/class-component': 'createRef for Class Component',
  '/ref/functional-component': 'useRef for Functional Component',
  '/ref/passing-ref': 'Passing Ref to React Component',
  '/ref/passing-ref-hoc': 'Passing Ref to React HOC Component',
  '/ref/Uuseimperativehandle': 'UseImperativeHandle',
};

export default function RefComponent(): JSX.Element {
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
            <Route path="/ref/class-component" component={RefForClassComponent} exact />
            <Route path="/ref/functional-component" component={RefForFunctionalComponent} exact />
            <Route path="/ref/passing-ref" component={PassingRef} exact />
            <Route path="/ref/passing-ref-hoc" component={ForwardRefHOC} exact />
            <Route path="/ref/Uuseimperativehandle" component={UseImperativeHandle} exact />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}
