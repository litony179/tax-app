import React, { Component } from 'react';
import HeaderText from '../HeaderText/HeaderText'
import './Header.css';

class header extends Component {
    render() {
        return(
            <div className="header-container">
                <div className="header-text-container">
                    <div className="header-text">
                        <HeaderText></HeaderText>
                    </div>
                </div>
                <div className="planetoid"></div>
                <div className="moon"></div>
            </div>
        )
    }
}

export default header;