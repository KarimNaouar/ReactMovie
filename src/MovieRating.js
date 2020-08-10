import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const MovieRating = (props) => {
  const [rating, setRating] = useState(1);
  const onStarClick = (nextValue) => {
    setRating(nextValue);
    props.Rating(nextValue);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", fontSize: "30px" }}
    >
      <StarRatingComponent
        starCount={5}
        onStarClick={onStarClick}
        value={rating}
      />
    </div>
  );
};

export default MovieRating;
