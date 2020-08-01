import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Wrapper from "../components/Wrapper";

function Search() {
  return (
    <Wrapper>
      <Jumbotron fluid style={{ marginTop: "25px" }}>
        <Container>
          <h2 className="text-center">(React) Google Books Search</h2>
          <p className="lead text-center">Search for and Save Books of Interest</p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={{ paddingTop: "10px" }}>
        <Container>
          <Form>
            <h4 style={{ marginBottom: "20px" }}>Book Search</h4>
            <Form.Group controlId="formKeywordSearch">
              <Form.Label>Keywords:</Form.Label>
              <Form.Control type="text" placeholder="Enter keywords to search for" />
            </Form.Group>
            <Button variant="primary" type="submit" className="float-right">Search</Button>
          </Form>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Container>
          <h4 style={{ marginBottom: "20px" }}>Results</h4>
          <Card border="dark">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Dark Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Container>
      </Jumbotron>
    </Wrapper>
  );
};

export default Search;
