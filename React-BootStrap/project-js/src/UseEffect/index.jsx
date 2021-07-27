import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import UseEffectOnceWithOutCleanUp from './OnceWithOutCleanUp';
import UseEffectOnceWithCleanUp from './OnceWithCleanUp';
import UseEffectWithDependencies from './WithDependencies';
import UseEffectOnReRender from './Onrerender';
import UseEffectAllImplementationInOnePlace from './AllImplementationInOnePlace';

const pageTitle = {
  '/hook-useeffect/once-without-cleanup': 'Once without Cleanup',
  '/hook-useeffect/once-with-cleanup': 'Once with Cleanup',
  '/hook-useeffect/with-dependencies': 'With Dependencies',
  '/hook-useeffect/on-rerender': 'On Every Re-Render',
  '/hook-useeffect/all-implementation-in-one-place': 'All Implementation In One Place',
};

export default function UseEffectHook() {
  const location = useLocation();

  return (
    <Container>
      <Row className="mb-3">
        <Col xs={12}>
          <h1>useEffect Hook - {pageTitle[location.pathname]}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Switch>
            <Route path="/hook-useeffect/once-without-cleanup" component={UseEffectOnceWithOutCleanUp} exact />
            <Route path="/hook-useeffect/once-with-cleanup" component={UseEffectOnceWithCleanUp} exact />
            <Route path="/hook-useeffect/with-dependencies" component={UseEffectWithDependencies} exact />
            <Route path="/hook-useeffect/on-rerender" component={UseEffectOnReRender} exact />
            <Route path="/hook-useeffect/all-implementation-in-one-place" component={UseEffectAllImplementationInOnePlace} exact />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}
