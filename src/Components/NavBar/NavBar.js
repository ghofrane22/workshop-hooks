import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";
import AddMovie from "../AddMovie/AddMovie";

const NavBar = ({
  rating,
  setRating,
  setSearchInput,
  movieData,
  setNewMovie,
  handleShow,
  handleClose,
  show,
  handleSave,
  newMovie,
}) => {
  const ratingChanged = (rating) => {
    setRating(rating);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Button variant="light" onClick={handleShow}>
              Add New Movie
            </Button>{" "}
          </Nav>

          <ReactStars
            value={rating}
            count={5}
            size={24}
            activeColor="#ffd700"
            onChange={ratingChanged}
          />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <AddMovie
        show={show}
        handleChange={handleChange}
        handleClose={handleClose}
        movieData={movieData}
        setNewMovie={setNewMovie}
        handleSave={handleSave}
        newMovie={newMovie}
      />
    </div>
  );
};

export default NavBar;
