import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProvideStart from './ProvideStart';
import PrivateRoute from './PrivateRoute';
import Game from './components/Game';
import Setup from './components/Setup';
import ListFinishedGames from './components/ListFinishedGames';

const App = () => (
  <ProvideStart>
    <Router>
      <Switch>
        <PrivateRoute path="/Board">
          <Game />
        </PrivateRoute>
        <PrivateRoute path="/ListFinishedGames">
          <ListFinishedGames />
        </PrivateRoute>
        <Route path="/" component={Setup} />
      </Switch>
    </Router>
  </ProvideStart>
);

export default App;
