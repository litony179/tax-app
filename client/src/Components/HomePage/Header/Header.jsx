import React, { Component } from 'react';
import './Header.css';

class header extends Component {
    render() {
        return(
            <div className="header-container">
                <div className="header-text-container">
                    <div className="header-text">
                        <h1>Tax-o-tron</h1>
                        <p>The free and simple online tax calculator.</p>
                    </div>
                </div>
                <div className="planetoid"></div>
                <div className="moon"></div>
            </div>
        )
    }
}

export default header;