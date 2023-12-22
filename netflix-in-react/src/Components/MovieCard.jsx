import React from "react";
import { Col, Row } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Col>
      <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </Col>
  );
};

export default MovieCard;
