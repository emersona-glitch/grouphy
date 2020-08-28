import React, { Component } from 'react';
import Search from '../Search/Search';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Search />
      </div>
    );
  }
  
}

const putReduxDataProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(putReduxDataProps)(App);