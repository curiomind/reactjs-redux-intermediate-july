import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import UseReducerSimpleWorking from './SimpleWorking';
import UseReducerShareWithChildran from './ShareWithChildren';
import UseReducerWithSibling from './ShareWithSibling';

const pageTitle = {
  '/hook-usereducer/simple-working': 'Simple Working',
  '/hook-usereducer/share-children': 'Share with Children',
  '/hook-usereducer/share-sibling': 'Share with Sibling',
};

export default function UseReducerHook() {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h1>useReducer Hook - {pageTitle[location.pathname]}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Switch>
              <Route path="/hook-usereducer/simple-working" component={UseReducerSimpleWorking} exact />
              <Route path="/hook-usereducer/share-children" component={UseReducerShareWithChildran} exact />
              <Route path="/hook-usereducer/share-sibling" component={UseReducerWithSibling} exact />
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
