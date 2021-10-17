import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './components/Game';
import Setup from './components/Setup';
import ListFinishedGames from './components/ListFinishedGames';

const App = () => (
  <Router>
      <Switch>
        <Route path="/Board" component={Game} />
        <Route path="/ListFinishedGames" component={ListFinishedGames} />
        <Route path="/" component={Setup} />
      </Switch>
  </Router>
);

export default App;
