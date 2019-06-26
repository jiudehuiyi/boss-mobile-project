import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Test from './containers/test';
import Home from './containers/home';
import PositionShow from './containers/positionShow/'
import PositionDetail from './containers/positionDetail'
class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path="/job" component={PositionShow} />
          <Route path='/jobDetail/web' component={ PositionDetail } />
          <Route  path='/test' component={Test} />
        </Switch>

      </Router>
    )
  }
}

export default App;
