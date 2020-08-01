import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Wrapper from "../components/Wrapper";

function Saved() {
  return (
    <Wrapper>
      <Jumbotron fluid style={{ marginTop: "25px" }}>
        <Container>
          <h2 className="text-center">(React) Google Books Search</h2>
          <p className="lead text-center">Search for and Save Books of Interest</p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Container>
          <h4 style={{ marginBottom: "20px" }}>Saved Books</h4>
          <Card border="dark">
            <Card.Header>
              <Card.Title>Book Title Here
                <Button variant="primary" type="button" className="float-right">Delete</Button>
                <Button variant="primary" type="button" className="float-right" style={{ marginRight:"10px" }}>View</Button>
              </Card.Title>
              <Card.Subtitle>Authors Here</Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Card.Text className="align-top">
                <Card.Img src="https://via.placeholder.com/150" style={{ height:"150px", width:"150px", marginRight:"10px", float:"left" }} />
                Book's description will go here.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Container>
      </Jumbotron>
    </Wrapper>
  );
};

export default Saved;