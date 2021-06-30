import React from "react";

const Result = props => {
  const { name, gender, country, description } =
    (props.location && props.location.state) || {};
  return (
    <div>
      <div className="form-details">
        <div>
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>Gender:</strong> {gender}
        </div>
        <div>
          <strong>Country:</strong> {country}
        </div>
        <div>
          <strong>Description:</strong> {description}
        </div>
      </div>
    </div>
  );
};

export default Result;
