import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import  Home from '../src/components/pages/home/index'


class App extends Component {
  render() {
    return (

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Home' component={Home} />
            </Switch>

    );
  }
}
export default App;
