import React, { Component } from 'react';
import { connect } from 'react-redux';


class Search extends Component {

    state = {
        tag: 'welcome'
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

    addToFavorites = () => {
        this.props.dispatch({
            type: 'ADD_FAVORITE', payload: 'kk'
        })
    }



    render() {

        return (
            <>
                <input onChange={event => { this.handleChange(event) }} placeholder="giphy tag search"></input>
                <button onClick={this.generateRandom}>Search using tag</button>
                <br />
                <img src={this.props.reduxState.giphyListReducer} alt="a random giphy"></img>
            </>

        )

    }



}

const putReduxDataProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxDataProps)(Search);