import React, { Component } from 'react';
import { connect } from 'react-redux'

class Favorites extends Component {

    state = {
        category: ''
    }

    componentDidMount() {
        this.getFavorites()
    }

    getFavorites = () => {
        this.props.dispatch({ type: 'FETCH_FAVORITES' })
    }

    handleCategory = (event) => {
        console.log('setting category')
        switch (event.target.value) {
            case 'funny':
                this.setState({
                    category: 1
                })
                break;
            case 'cohort':
                this.setState({
                    category: 2
                })
                break;
            case 'cartoon':
                this.setState({
                    category: 3
                })
                break;
            case 'nsfw':
                this.setState({
                    category: 4
                })
                break;
            case 'meme':
                this.setState({
                    category: 5
                })
                break;
                default:
        }
    }

    handleClick = () => {
        this.props.dispatch({ type: 'PUT_CATEGORY', payload: this.state.category })
    }

    render() {
        return (
            <div>
                {this.props.reduxState.favoritesReducer.map((favorite, i) => {
                    return (
                        <>
                            <ul key={i}>
                                <img src={this.props.reduxState.favoritesReducer} alt="a random giphy"></img>
                            </ul>
                            <select name="categories" onChange={this.handleCategory}>
                                <option value='funny'>Funny</option>
                                <option value='cohort'>Cohort</option>
                                <option value='cartoon'>Cartoon</option>
                                <option value='nsfw'>NSFW</option>
                                <option value='meme'>Meme</option>
                            </select>
                            <button onClick={this.handleClick}>Add to Category</button>
                        </>
                    )
                })}
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Favorites);
