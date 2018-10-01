import React, { Component } from 'react';
import './App.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <p className="header-element">Home</p>
                <p className="header-element">Categories</p>
                <p className="header-element">Login</p>
                <p className="header-element">Register</p>
            </div>
        );
    }
}

export default Header;