import React, { Component } from 'react';
import Basic from './components/basic'
import Todo from './components/todo'
import IncrementDecrement from './components/increment-decrement'
import WatchTimer from './components/watchTimer'
import Divider from './components/divider'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <div className="taskMainContainer">
            <div className="taskSectionOne">
              <IncrementDecrement />
              <WatchTimer />
            </div>
            <div className="taskDivider">
              <Divider />
            </div>
            <div className="taskSectionTwo">
              <Todo />
            </div>
            <div className="taskDivider">
              <Divider />
            </div>
            <div className="taskSectionThree">
              <IncrementDecrement />
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
