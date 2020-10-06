import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
