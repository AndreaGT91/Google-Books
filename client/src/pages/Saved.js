import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'
import Wrapper from "../components/Wrapper";
import API from "../utils/API";

function Saved() {
  const defaultAlertState = { show: false, type: "", msg: "" };
  const successAlertState = { show: true, type: "success", msg: "Book deleted successfully" };
  const errorAlertState = { show: true, type: "danger", msg: "Unable to delete book" };

  // Setting our component's initial state
  const [books, setBooks] = useState( [] );
  const [showAlert, setShowAlert] = useState( defaultAlertState );

  // Setting our component's initial state
  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getSavedBooks()
      .then(response => 
        setBooks(response.data)
      )
      .catch(error => console.log(error));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(index) {
    API.deleteBook(index)
      .then(response => {
        setShowAlert(successAlertState);
        loadBooks(); 
      })
      .catch(error => {
        setShowAlert(errorAlertState);
        console.log(error); 
      });
  }

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
      <Jumbotron fluid style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Container>
          <h4 style={{ marginBottom: "20px" }}>Saved Books</h4>
          {books.length ? (
            <>
              { books.map((book, index) => (
                <div  key={book._id}>
                  <Card border="dark">
                    <Card.Header>
                      <Card.Title style={{ fontWeight: "bold" }}>{book.title}
                        <Button variant="primary" type="button" className="float-right" 
                          onClick={() => deleteBook(index)} >Delete</Button>
                        <Button href={book.link} target="_blank" rel="noopener noreferrer" variant="primary" 
                          type="button" className="float-right" style={{ marginRight:"5px" }} >View</Button>
                      </Card.Title>
                      { book.authors.map((author, index) => (
                        <Card.Subtitle key={index}>{author}</Card.Subtitle>
                      ))}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text style={{ fontSize:"16px"}}>
                        <Card.Img src={book.image} 
                          style={{ height:"150px", width:"150px", marginRight:"10px", float:"left" }} />
                        {book.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <br />
                </div>  
              ))}
            </>
          ) : (
            <h5 style={{ fontStyle: "italic" }}>No saved books to display</h5>
          )}
        </Container>
      </Jumbotron>
    </Wrapper>
  );
};

export default Saved;