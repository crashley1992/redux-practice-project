import React, { Component } from 'react';
import Cats from '../Cats/Cats';
import cats from './cats.json';
import Header from '../Header/Header';


class MovieReviews extends Component {

    state = {
        cats,
        data: []
    }

    //api call for movie reviews.
    

    //displays cats onto page by setting json data to state
    catsDisplay = () => {
        this.setState({ cats });
    }

    render() {
        return(
            <div>
                <Header />
                {this.state.cats.map(cats => (<Cats 
                    id={cats.id}
                    name={cats.name}
                    image={cats.image}
                />))}
            </div>
        )
    }
}

export default MovieReviews;