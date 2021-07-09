import React from "react";
import PropTypes from 'prop-types';

FeedbackOptions.propTypes = {
  onClick1: PropTypes.func.isRequired,
  onClick2: PropTypes.func.isRequired,
  onClick3: PropTypes.func.isRequired,
};
function FeedbackOptions({onClick1,onClick2,onClick3}){
return(
    <>
     <button
      onClick={onClick1}
      key= "good"
      type="button"> GOOD </button>
    <button
     onClick={onClick2}
     key= "neutral"
     type="button"> NEUTRAL </button>
    <button
     onClick={onClick3}
     key= "bad"
     type="button"> BAD</button>
     </>
)
}
export default FeedbackOptions;