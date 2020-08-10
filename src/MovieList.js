import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import StarRatingComponent from "react-star-rating-component";

const MovieList = (props) => {
  return (
    <div className="listMov">
      {props.useMovie.map((e, index) => (
        <Card className="card" key={index}>
          <CardBody>
            <CardTitle className="title" key={e.id}>
              {e.title}
            </CardTitle>
            <CardSubtitle className="title">{e.year}</CardSubtitle>
            <CardText className="director">{e.director}</CardText>
            <img
              style={{
                width: "250px",
                height: "360px",
                margin: "10px 0 10px 0",
              }}
              src={e.image}
              alt=""
            />

            <CardText className="synopsis">{e.synopsis}</CardText>
            <StarRatingComponent value={e.rating} starCount={5} />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
