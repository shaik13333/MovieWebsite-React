import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom"

const FirstPage = () => {
  let [api, setApi] = useState([]);
  let [search, setSearch] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=c202f0c11aa8b52272804f5b020a8667&language=en-US")
      .then((X) => X.json())
      .then(y => {
        setApi(y.results);
      });
  }, []);

  function mySearch() {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=c202f0c11aa8b52272804f5b020a8667`)
      .then((X) => X.json())
      .then(y => {
        setApi(y.results);
      });
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>Link</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-success" onClick={() => mySearch()}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        {api.map((data) => (
          <div key={data.id}>
            <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt={data.title} />
          </div>
        ))}
      </Carousel>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {api.map((data) => (
          <Card key={data.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.overview}</Card.Text>
              <Button variant="primary" onClick={()=>navigate("/nextpage", {state:{data}})}>View Details</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      
      {/* <NextPage /> */}
    </div>
  );
};

export default FirstPage;
