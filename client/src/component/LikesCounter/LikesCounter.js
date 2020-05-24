import React, {Component} from 'react';
import { connect } from 'react-redux';

class LikesCounter extends Component {
    state = {
        counter: 0
    }

     likesHandler = () => {
        if ('inc') {
            this.setState({
                counter: this.state.counter + 1
            })
        }
    }

    render() {
        return(
            <div>
                <p>Total Likes: {this.state.counter}</p>
                <button onClick={this.likesHandler}>Like</button>
            </div>
        )
    }
}



export default connect()(LikesCounter);