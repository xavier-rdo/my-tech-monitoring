import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import HomepageContainer from './HomepageContainer';
import SignupPage from '../users/SignupPage';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App container-fluid">
                    <NavigationBar />
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <Route exact path="/" component={HomepageContainer}/>
                            <Route exact path="/signup" component={SignupPage}/>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
