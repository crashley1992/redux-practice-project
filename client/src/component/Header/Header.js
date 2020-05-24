import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div id="header">
            <h1 className="header-title">Vote for you Favorite Cat</h1>
            <button id="random-button">Random Cats Review</button>
        </div>
    )
}

export default Header;