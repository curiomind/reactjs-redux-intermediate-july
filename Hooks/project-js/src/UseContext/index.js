import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import UseContextSimpleWorking from './SimpleWorking';

import { initialState } from './SimpleWorking/Reducer/InitialState';
import reducer from './SimpleWorking/Reducer';
import { SimpleContext } from './SimpleWorking/Context';

const pageTitle = {
  '/hook-usecontext/simple-working': 'Simple Working',
};

export default function UseContextHook() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const location = useLocation();

  return (
    <SimpleContext.Provider value={{ state, dispatch }}>
      <React.Fragment>
        <div className="container">
          <div className="row mb-3">
            <div className="col-12">
              <h1>useContext Hook - {pageTitle[location.pathname]}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Switch>
                <Route path="/hook-usecontext/simple-working" component={UseContextSimpleWorking} exact />
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    </SimpleContext.Provider>
  );
}
