import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Search extends Component {

    state = {

        tag: ''

    }



    handleChange = (event) => {
        
        this.setState({
            tag: event.target.value
        })

    }



    componentDidMount = () => {
        
        this.generateRandom()

    }



    generateRandom = () => {
        this.props.dispatch({
            type: 'FETCH_SEARCH', payload: this.state.tag
        });
        console.log(this.state.tag);
    }



    render () {

        return (
            <>
                <input onChange={event => {this.handleChange(event)}} placeholder="giphy tag search"></input>
                <button onClick={this.generateRandom}>Search using tag</button>
                <br/>
                <img src={this.props.reduxState.random} alt="a random giphy"></img>
            </>
        )

    }



}