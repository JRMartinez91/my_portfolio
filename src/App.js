import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Homepage from './Components/Homepage'
import Projects from './Components/Projects'

class App extends Component {
  render(){
    return (
      <Router>
        <header>
        <h1>Casey's Portfolio</h1>
        <img alt="Banner"/>
        </header>
        <Switch>
          <Route path="/projects" component={Projects}/>
          <Route path="/home" component={Homepage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
