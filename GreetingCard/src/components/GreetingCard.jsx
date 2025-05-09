import React from "react";
import PropTypes from "prop-types";
import "./GreetingCard.css";

const GreetingCard = () => {
  return (
    <div className="greeting-card">
      <h2 className="greeting-text">
        Hey there, Welcome back
      </h2>
      <h4 className="greeting-text">It's Preminant Assignment 2 </h4>
    </div>
  );
};

GreetingCard.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string
};

export default GreetingCard;