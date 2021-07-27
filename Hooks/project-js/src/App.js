/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Header from './Header';

// import UseStateHook from './UseState';
// import UseEffectHook from './UseEffect';
// import UseReducerHook from './UseReducer';
// import UseContextHook from './UseContext';
// import OtherHooks from './OtherHooks';
// import RefComponent from './Ref';
// import PureComponent from './PureComponent';
// import NotFound from './404';
// import Home from './Home'
import DynamicRoute from './DynamicRoute';
import UseCustomeHook from './CustomHooks';

// import { initialState } from './UseContext/SimpleWorking/Reducer/InitialState';
// import reducer from './UseContext/SimpleWorking/Reducer';
// import { SimpleContext } from './UseContext/SimpleWorking/Context';

const UseStateHook = React.lazy(() => import('./UseState'));
const UseEffectHook = React.lazy(() => import('./UseEffect'));
const UseReducerHook = React.lazy(() => import('./UseReducer'));
const UseContextHook = React.lazy(() => import('./UseContext'));
const OtherHooks = React.lazy(() => import('./OtherHooks'));
const RefComponent = React.lazy(() => import('./Ref'));
const PureComponent = React.lazy(() => import('./PureComponent'));
const NotFound = React.lazy(() => import('./404'));
const Home = React.lazy(() => import('./Home'));

function App() {
  // const [state, dispatch] = React.useReducer(reducer, initialState);
  const match = useRouteMatch('/hook-usestate/simple-working');

  React.useEffect(() => {
    console.log('App', match);
  });

  return (
    // <SimpleContext.Provider value={{ state, dispatch }}>
    <React.Fragment>
      <Header />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/hook-custom" component={UseCustomeHook} />
          <Route path="/hook-usestate" component={UseStateHook} />
          <Route path="/hook-useeffect" component={UseEffectHook} />
          <Route path="/hook-usereducer" component={UseReducerHook} />
          <Route path="/hook-usecontext" component={UseContextHook} />
          <Route path="/hook-other" component={OtherHooks} />
          <Route path="/ref" component={RefComponent} />
          <Route path="/pure-component" component={PureComponent} />
          <Route path="/dynamic/:slug/" component={DynamicRoute} exact />
          <Route path="/dynamic/:slug/:id" component={DynamicRoute} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </React.Suspense>
    </React.Fragment>
    // </SimpleContext.Provider>
  );
}

export default App;
