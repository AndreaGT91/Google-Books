import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Wrapper from "../components/Wrapper";
import getGoogleBooks from "../utils/search-API";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState( [] );
  const [keyword, setKeyword] = useState( "" );

  function saveBook(index) {

  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    setKeyword(event.target.value);
  };

  // When the form is submitted, load books matching the entered keyword(s)
  function handleFormSubmit(event) {
    event.preventDefault();
    if (keyword) {
      getGoogleBooks(keyword)
      .then(response => setBooks(response.data.items))
      .catch(error => console.log(error));
    };
  };

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
              <Form.Control type="text" name="search" onChange={handleInputChange}
                placeholder="Enter keywords to search for" />
            </Form.Group>
            <Button variant="primary" type="submit" className="float-right" onClick={handleFormSubmit}>Search</Button>
          </Form>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Container>
          <h4 style={{ marginBottom: "20px" }}>Results</h4>
          {books.length ? (
            <>
              { books.map((book, index) => (
                <div key={book.id}>
                  <Card border="dark">
                    <Card.Header>
                      <Card.Title style={{ fontWeight: "bold" }}>{book.volumeInfo.title}
                        <Button variant="primary" type="button" className="float-right" 
                          onClick={() => saveBook(index)} >Save</Button>
                        <Button href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" variant="primary" 
                        type="button" className="float-right" style={{ marginRight:"5px" }} >View</Button>
                      </Card.Title>
                      { book.volumeInfo.authors.map((author, index) => (
                        <Card.Subtitle key={index}>{author}</Card.Subtitle>
                      ))}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text style={{ fontSize:"16px"}}>
                        <Card.Img src={book.volumeInfo.imageLinks.thumbnail} 
                          style={{ height:"150px", width:"150px", marginRight:"10px", float:"left" }} />
                        {book.volumeInfo.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <br />
                </div>  
              ))}
            </>
          ) : (
            <h5 style={{ fontStyle: "italic" }}>No results to display</h5>
          )}
        </Container>
      </Jumbotron>
    </Wrapper>
  );
};

export default Search;
