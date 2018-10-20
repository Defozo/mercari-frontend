import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from '../HomeScreen/HomeScreen';
import PageNotFoundScreen from '../PageNotFoundScreen/PageNotFoundScreen';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={HomeScreen} />
          <Route component={PageNotFoundScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
