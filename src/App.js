import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../src/views/homepage';
import MainLayout from './layout/MainLayout';

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
