
import React, { Component} from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

export default class Reviews extends Component {
   
    state = {

            good:0,
            neutral:0,
            bad:0,
            showMessage: false,  
    };
    

    countTotalFeedback(){
        return this.state.good + this.state.neutral + this.state.bad;

    }
    countPositiveFeedbackPercentage(){
        return this.state.good * 100 / this.countTotalFeedback()
    }

    handleClickGood = (event) => {
        this.setState({showMessage: true});
        this.setState({good: this.state.good+1})

    }
    handleClickNeutral = (event) =>  {
        this.setState({showMessage: true});
        this.setState({neutral: this.state.neutral+1})

    }
    handleClickBad = (event) =>  {
        this.setState({showMessage: true});
        this.setState({bad: this.state.bad+1});

    }
        
       
    render() {
        if(this.state.showMessage === false){
            return(
            <><FeedbackOptions onClick1 = {this.handleClickGood} onClick2 = {this.handleClickNeutral} onClick3 = {this.handleClickBad}></FeedbackOptions>
            <p>No feedback given</p> </>)};
          
        return (
            <>
                <div className ="Feedback">
                   
                       <FeedbackOptions onClick1 = {this.handleClickGood} onClick2 = {this.handleClickNeutral} onClick3 = {this.handleClickBad}></FeedbackOptions>
                        {<Statistics showMessage = {this.state.showMessage} good = {this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} percentage = {this.countPositiveFeedbackPercentage()}></Statistics>}
                  
                </div>

            </>
             
        );
       
    }
}


