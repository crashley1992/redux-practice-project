import React, {Component} from 'react';
import { connect } from 'react-redux';
import './likes-counter.css';

class LikesCounter extends Component {
    state = {
        counter: 0
    }

     likesHandler = (action) => {
        if (action) {
            this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
        }
    }

    render() {
        return(
            <div>
                <p>Total Likes: {this.props.ctr}</p>
                <button id="likes-button" label="Increment" onClick={this.props.likesHandler}>Like</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        likesHandler: () => dispatch({type: 'INCREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikesCounter);