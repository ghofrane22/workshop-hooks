import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";

const NavBar = ({ rating, setRating, setSearchInput }) => {
  const ratingChanged = (rating) => {
    setRating(rating);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Movie App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
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
  );
};

export default NavBar;
