import React, { Component } from 'react';
import Search from '../Search/Search';
import Favorite from '../Favorite/Favorite.jsx'
import { connect } from 'react-redux';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Router>
          <div>
            <ul className="nav">
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
            <Route exact path="/favorites" component={Favorite} />            
          </div>
        </Router>
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