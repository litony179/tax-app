import React from 'react';
import {Link} from 'react-router-dom';
import './Choices.css';

const Choices = (props) => {
    return(
        <div className="choices-container">
            <h1>Your tax results</h1>
            <div className="tax-form-text">
                <p>Select your country of residence *</p>
                <select className="tax-form-input tax-form-input-disabled" disabled="disabled">
                    <option value={props.data.country}>{props.data.country}</option>
                </select>
            </div>
            <div className="tax-form-text">
                <p>Select an income year *</p>
                <select className="tax-form-input tax-form-input-disabled" disabled="disabled">
                    <option value={props.data.year}>{props.data.year}</option>
                </select>
            </div>
            <div className="tax-form-text">
                <p>Enter your total taxable income for the income year *</p>
                <div className="currency-input tax-form-input-disabled">
                    <span className="currency-code currency-code-disabled">$</span>
                    <input 
                        type="text" 
                        name="income" 
                        className="currency-text tax-form-input-disabled" 
                        placeholder="Amount" 
                        disabled
                        value={props.data.income}
                        ></input>
                    <span className="currency-precision currency-precision-disabled">.00</span> 
                </div>
            </div>
            <Link className="link" to="/">Go back to the previous screen</Link>
        </div>
        
    )
}

export default Choices;