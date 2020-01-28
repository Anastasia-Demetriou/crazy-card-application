
import React, { Component } from "react";

 class Form extends Component  {
     constructor(props) {
         super(props)
         this.state ={
             employmentType: "partTime",
             annualIncome: "lowerIncome"
         };
     }

     handleEmploymentType = event => {
        this.setState({
            employmentType: event.target.value
        });
     };

     handleAnnualIncome = event => {
        this.setState({
            annualIncome: event.target.value
        });
     };

     handleSubmit = event => {
            event.preventDefault();
            this.props.callback(this.state);
        };
     

     render () {
         const { employmentType, annualIncome } = this.state
         return(
             <form onSubmit ={this.handleSubmit}>
                <div>  
                    <label>What's your employment type? </label>
                    <select 
                        type="text"     
                        value={employmentType}
                        onChange={this.handleEmploymentType}
                        > 
                        <option value="fullTime"> Full Time</option>
                        <option value="partTime"> Part Time</option>
                        <option value="student"> Student </option>
                    </select>
                </div>
                <div>   
                    <label>What's your annual income? </label>
                        <select 
                            type="text"     
                            value={annualIncome}
                            onChange={this.handleAnnualIncome}
                            > 
                            <option value="highIncome"> You earn more than £16,000</option>
                            <option value="lowIncome"> You earn less than £16,000</option>
                        </select>
                </div>
                <button type="submit">Submit</button>
             </form>
         )
     }
 }

 export default Form