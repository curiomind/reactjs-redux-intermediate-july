import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import UseStateSimpleNotWorking from './SimpleNotWorking';
import UseStateSimpleWorking from './SimpleWorking';
import UseStateShareWithChildren from './ShareWithChildren';
import UseStateShareWithSibling from './ShareWithSibling';
import StateInClassComponent from './ClassComponent';
import Notfound from './404';

const pageTitle = {
  '/hook-usestate/simple-not-working': 'Simple Not Working',
  '/hook-usestate/simple-working': 'Simple Working',
  '/hook-usestate/share-children': 'Share with Children',
  '/hook-usestate/share-sibling': 'Share with Sibling',
  '/hook-usestate/class-component': 'Class Component',
};

export default function UseStateHook() {
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h1>useState Hook - {pageTitle[location.pathname]}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Switch>
              <Route path="/hook-usestate/simple-not-working" component={UseStateSimpleNotWorking} exact />
              <Route path="/hook-usestate/simple-working" component={UseStateSimpleWorking} exact />
              <Route path="/hook-usestate/share-children" component={UseStateShareWithChildren} exact />
              <Route path="/hook-usestate/share-sibling" component={UseStateShareWithSibling} exact />
              <Route path="/hook-usestate/class-component" component={StateInClassComponent} exact />
              <Route path="*" component={Notfound} exact />
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
