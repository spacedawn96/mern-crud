import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Postinfo from './components/Postinfo';
import Edit from './components/Edit';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/post/:_id" component={Postinfo} />
        <Route exact path="/post/:_id/edit" component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
