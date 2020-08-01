import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

function Search() {
  // Setting our component's initial state
  const defaultAlertState = { show: false, type: "", msg: "" };
  const successAlertState = { show: true, type: "success", msg: "Book saved successfully" };
  const errorAlertState = { show: true, type: "danger", msg: "Unable to save book" };
  const infoAlertState = { show: true, type: "info", msg: "Please enter keyword(s) to search for" };

  const [books, setBooks] = useState( [] );
  const [keyword, setKeyword] = useState( "" );
  const [showAlert, setShowAlert] = useState( defaultAlertState);

  function saveBook(index) {
    API.createSavedBook(books[index])
    .then(setShowAlert(successAlertState))
    .catch(setShowAlert(errorAlertState));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    setKeyword(event.target.value);
    if (showAlert.show) {
      setShowAlert(defaultAlertState);
    };
  };

  // When the form is submitted, load books matching the entered keyword(s)
  function handleFormSubmit(event) {
    event.preventDefault();
    if (keyword) {
      if (showAlert.show) {
        setShowAlert(defaultAlertState);
      };
      API.getGoogleBooks(keyword)
      .then(response => setBooks(response.data.items))
      .catch(error => console.log(error));
    }
    else {
      setShowAlert(infoAlertState);
    };
  };

  return (
    <Wrapper>
      <Alert show={showAlert.show} variant={showAlert.type} transition={null}
        onClose={() => setShowAlert(defaultAlertState)} dismissible>
        <Alert.Heading>{showAlert.msg}</Alert.Heading>
      </Alert>
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
