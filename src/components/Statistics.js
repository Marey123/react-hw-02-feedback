import React from "react";
import PropTypes from 'prop-types';

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    showMessage:PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired,
    percentage:PropTypes.number.isRequired
  };
function Statistics({good,neutral,bad,showMessage,total,percentage}){
return(
    showMessage && <div>
        <ul>
             <li>good: {good}</li>
             <li>neutral: {neutral}</li>
             <li> bad: {bad}</li>
             <li>total:{total}</li>
             <li>Percentage of good reviews: {percentage}%</li>
        </ul>
    </div>
)
}

export default Statistics;