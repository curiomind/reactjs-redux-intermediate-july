import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import UseContextSimpleWorking from './SimpleWorking';

// import { initialState } from './SimpleWorking/Reducer/InitialState';
// import reducer from './SimpleWorking/Reducer';
// import { SimpleContext } from './SimpleWorking/Context';

const pageTitle: Record<string, string> = {
  '/hook-usecontext/simple-working': 'Simple Working',
};

export default function UseContextHook(): JSX.Element {
  // const [state, dispatch] = React.useReducer(reducer, initialState);
  const location = useLocation();

  return (
    // <SimpleContext.Provider value={{ state, dispatch }}>
    <Container>
      <Row className="mb-3">
        <Col xs={12}>
          <h1>useContext Hook - {pageTitle[location.pathname]}</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Switch>
            <Route path="/hook-usecontext/simple-working" component={UseContextSimpleWorking} exact />
          </Switch>
        </Col>
      </Row>
    </Container>
    // </SimpleContext.Provider>
  );
}
