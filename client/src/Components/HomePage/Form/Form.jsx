import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './Form.css';

class form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [
                {
                    name: 'Select Country',
                    id: 'C0'
                },
                {
                    name: 'Australia',
                    id: 'C1'
                },
                {
                    name: 'New Zealand',
                    id: 'C2'
                }
            ],
            years: [
                {
                    name: 'Select income year',
                    id: "Y0",
                },
                {
                    name: '2020-2021',
                    id: "Y1"
                },
                {
                    name: '2021-2022',
                    id: "Y2"
                },
            ],
            userInfo: {
                country: "",
                year: "",
                income: ""
            },
        }

        this.getIncomeInfo = this.getIncomeInfo.bind(this);
    }

    getIncomeInfo(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState( prevState => ({
            // ...prevState,
            userInfo: {
                ...prevState.userInfo,
                [name]: value
            }
            
        }));
        console.log(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    

    render () {
        return(
            <div className="form-container">
                <h1>Calculate your tax</h1>
                <form className="tax-form" onSubmit={this.handleSubmit}>
                    <div className="tax-form-constraints">
                        <InfoOutlinedIcon className="info-icon" style={{ color: '#8477C9'}}></InfoOutlinedIcon>
                        <p>Fields marked with * are mandatory</p>
                    </div>
                    <div className="tax-form-text">
                        <p>Select your country of residence *</p>
                        <select className="tax-form-input" name="country" onChange={this.getIncomeInfo}>
                            {this.state.countries.map((country) => (
                                <option key={country.id} value={country.name}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="tax-form-text">
                        <p>Select an income year *</p>
                        <select className="tax-form-input" name="year" onChange={this.getIncomeInfo}>
                            {this.state.years.map((year) => (
                                <option key={year.id} value={year.name}>{year.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="tax-form-text">
                        <p>Enter your total taxable income for the income year *</p>
                        <div className="currency-input">
                            <span className="currency-code">$</span>
                            <input 
                                type="text" 
                                name="income" 
                                className="currency-text" 
                                placeholder="Amount" 
                                onChange={this.getIncomeInfo} 
                                value={this.state.value}></input>
                            <span className="currency-precision">.00</span> 
                        </div>
                        <Link to={{ 
                            pathname: "/results", 
                            state: {
                                country: this.state.userInfo.country,
                                year: this.state.userInfo.year,
                                income: this.state.userInfo.income
                            }
                        }}>
                            <input 
                                className="calculate-btn"
                                type="submit" 
                                value="Calculate" 
                            ></input>
                        </Link>
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default form;
