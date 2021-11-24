import React from 'react';
import './Details.css';



const Details = (props) => {
    const calculateBracketA = (result) => {
        result = 0;
        return Math.round(result);
    }

    const calculateBracketB = (result) => {
        if(props.data.income >= 18200) {
            result = (45000 - 18200) * 0.19;
        } 
        
        if(props.data.income < 18200) {
            result = 0;
        } 

        if(props.data.income < 45000 && props.data.income > 18200) {
            result = (props.data.income - 18200) * 0.19
        }
        return Math.round(result);
    }

    const  calculateBracketC = (result) => {
        if(props.data.income > 45000) {
            result = (120000 - 45000) * 0.325
        }

        if(props.data.income < 120000 && props.data.income > 45000) {
            result = (props.data.income - 45000) * 0.325;
        }

        if(props.data.income < 45000) {
            result = 0
        }
        
        return Math.round(result);
    }

    const calculateBracketD = (result) => {
        if(props.data.income > 120000) {
            result = (180000 - 120000) * 0.37
        }

        if(props.data.income < 180000 && props.data.income > 120000) {
            result = (props.data.income - 120000) * 0.37;
        }

        if(props.data.income < 120000){
            result = 0;
        }

        return Math.round(result);
    }

    const calculateBracketE = (result) => {
        if(props.data.income > 180000) {
            result = (props.data.income - 180000) * 0.45
        }

        if(props.data.income < 180000){
            result = 0;
        }

        return Math.round(result);
    }


    return(
        <div>
            <div className="header-container">
                <div className="detailed-tax-income-container">
                    <div className="details-taxable-income">
                        <p>Your estimated taxable income is:</p>
                    </div>
                    <div className="details-taxable-income-amount">
                        <p><span>$</span>{
                            calculateBracketA() +
                            calculateBracketB() +
                            calculateBracketC() +
                            calculateBracketD() +
                            calculateBracketE()}<span>.00</span></p>
                    </div>
                </div>
                <p className="tax-breakdown-title">Breakdown</p>
                <div className="detailed-tax-breakdown-container">
                    <div className="tax-bracket">
                        <p>Tax Bracket <br></br>$0 - $18,200</p>
                        <span>${calculateBracketA()}</span>
                    </div>
                    <div className="tax-bracket">
                        <p>Tax Bracket <br></br>$18,201 - $45,000</p>
                        <span>${calculateBracketB()}</span>
                    </div>
                    <div className="tax-bracket">
                        <p>Tax Bracket <br></br>$45,001 - $120,000</p>
                        <span>${calculateBracketC()}</span>
                    </div>
                    <div className="tax-bracket">
                        <p>Tax Bracket <br></br>$120,001 - $180,000</p>
                        <span>${calculateBracketD()}</span>
                    </div>
                    <div className="tax-bracket">
                        <p>Tax Bracket <br></br>$180,000+</p>
                        <span>${calculateBracketE()}</span>
                    </div>
                    
                </div>
                <div className="planetoid details-planetoid"></div>
                <div className="moon details-moon"></div>
            </div>
        </div>
    )
}

export default Details;




