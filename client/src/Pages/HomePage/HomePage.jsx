import React, { Component } from 'react';
import './HomePage.css';
import Header from '../../Components/HomePage/Header/Header';
import Form from '../../Components/HomePage/Form/Form';

class HomePage extends Component {
    render() {
        return(
            <div className="welcome-container">
                <Header></Header>
                <Form></Form>
            </div>
        )
    }
}

export default HomePage;
