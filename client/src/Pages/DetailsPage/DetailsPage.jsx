import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Choices from '../../Components/DetailsPage/Choices/Choices';
import Details from '../../Components/DetailsPage/Details/Details';
import './DetailsPage.css';

class DetailsPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            country: this.props.location.state.country,
            year: this.props.location.state.year,
            income: this.props.location.state.income
        }
    }

    render() {
        return(
            <div className="details-container">
                <Choices data={this.state}></Choices>
                <Details data={this.state}></Details>
            </div>
        );
    }
}

export default DetailsPage
