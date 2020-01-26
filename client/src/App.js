import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Postinfo from './components/Postinfo';
import Edit from './components/Edit';
import { loadUser } from './action/authActions';
import rootReducer from './reducer/index';
import { setPosts } from './action/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  store.dispatch(setPosts());

  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/post/:_id" component={Postinfo} />
          <Route exact path="/post/:_id/edit" component={Edit} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
