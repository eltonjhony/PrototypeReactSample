import React, {
  Component,
} from 'react';

import {
  Router,
  Scene,
} from 'react-native-router-flux'

import Dashboard from '../components/dashboard/dashboard'

class App extends Component {
  render() {
    return (
      <Router >
        <Scene key="root" hideNavBar>
          <Scene key="DASHBOARD" component={Dashboard} initial />
        </Scene>
      </Router>
    );
  }
}

export default App;
