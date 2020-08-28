import React, { Component } from 'react';
import { connect } from 'react-redux';


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
        console.log(this.props.reduxState.giphyListReducer);
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
                <div>
                    {this.props.reduxState.giphyListReducer.map((gif, i) => {
                        return (
                            <>
                            <img src={gif.images.downsized.url} alt="a random giphy" key={i}></img>
                            <button onClick={this.addToFavorites}>Add to Favorites!</button>
                            </>
                        )

                    })}
                </div>

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