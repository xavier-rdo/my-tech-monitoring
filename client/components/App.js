import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import NavigationBar from './NavigationBar';
import Homepage from './Homepage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Route exact path="/" component={Homepage}/>
        </div>
      </Router>
    );
  }
}

export default App;
