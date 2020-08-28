import React, { Component } from 'react';
import Search from '../Search/Search';
import Favorites from '../Favorite/Favorite.jsx'
import { connect } from 'react-redux';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h1>Giphy Search!</h1>

          <nav>
            <Link to='/'>Search</Link> |
            <Link to='/Favorites'>Favorites</Link>
          </nav>

          <Route exact path="/" component={Search} />
          <Route exact path="/Favorites" component={Favorites} />

          {/* <Search /> */}
        </div>
      </Router>
    );
  }
  
}

const putReduxDataProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(putReduxDataProps)(App);