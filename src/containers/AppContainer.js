import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import App from './App';

// Entry component : this is the component used in the index.html to replace root element
// This component also defines all the Routes and default the route to Home 
class AppContainer extends Component {
  render() {
    return (
      <Router>
        <div className='container'>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pokePlush' component={App} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppContainer;
