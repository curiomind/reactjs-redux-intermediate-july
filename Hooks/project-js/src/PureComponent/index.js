import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import PureClassComponent from './ClassComponent';
import PureFunctionalComponent from './FuntionalComponent';

const pageTitle = {
  '/pure-component/class-component': 'Pure Class Component',
  '/pure-component/functional-component': 'Pure Functional Component',
};

export default function PureComponent() {
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h1>{pageTitle[location.pathname]}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Switch>
              <Route path="/pure-component/class-component" component={PureClassComponent} exact />
              <Route path="/pure-component/functional-component" component={PureFunctionalComponent} exact />
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
