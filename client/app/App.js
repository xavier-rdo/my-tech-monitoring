import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import Homepage from './Homepage';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Route exact path="/" component={Homepage}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
