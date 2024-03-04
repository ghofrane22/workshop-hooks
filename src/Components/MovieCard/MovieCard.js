import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import "./Style.css";
const MovieCard = ({ movie, index }) => {
  return (
    <div key={index}>
      <Card style={{ width: "18rem", height: "400px" }} className="movie-card">
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={movie.rating}
            activeColor="#ffd700"
          />
          ,
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
