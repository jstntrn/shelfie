import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import {HashRouter as Router} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      productList: []
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="body-display">
            {routes}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
