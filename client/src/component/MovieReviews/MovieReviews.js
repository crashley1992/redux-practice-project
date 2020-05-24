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
                {this.state.cats.map(cat => (<Cats 
                    id={cat.id}
                    key={cat.id}
                    name={cat.name}
                    image={cat.image}
                />))}
            </div>
        )
    }
}

export default MovieReviews;