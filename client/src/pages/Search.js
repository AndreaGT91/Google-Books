import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Wrapper from "../components/Wrapper";
import API from "../utils/search-API";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([{
    "kind": "books#volume",
    "id": "zyTCAlFPjgYC",
    "etag": "f0zKg75Mx/I",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC",
    "volumeInfo": {
     "title": "The Google story",
     "authors": [
      "David A. Vise",
      "Mark Malseed"
     ],
     "publisher": "Random House Digital, Inc.",
     "publishedDate": "2005-11-15",
     "description": `Here is the story behind one of the most remarkable Internet
     successes of our time. Based on scrupulous research and extraordinary access
     to Google, ...`,
     "industryIdentifiers": [
      {
       "type": "ISBN_10",
       "identifier": "055380457X"
      },
      {
       "type": "ISBN_13",
       "identifier": "9780553804577"
      }
     ],
     "pageCount": 207,
     "dimensions": {
      "height": "24.00 cm",
      "width": "16.03 cm",
      "thickness": "2.74 cm"
     },
     "printType": "BOOK",
     "mainCategory": "Business & Economics / Entrepreneurship",
     "categories": [
      "Browsers (Computer programs)",
     ],
     "averageRating": 3.5,
     "ratingsCount": 136,
     "contentVersion": "1.1.0.0.preview.2",
     "imageLinks": {
      "smallThumbnail": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "small": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api",
      "medium": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api",
      "large": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=4&edge=curl&source=gbs_api",
      "extraLarge": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=6&edge=curl&source=gbs_api"
     },
     "language": "en",
     "infoLink": "https://books.google.com/books?id=zyTCAlFPjgYC&ie=ISO-8859-1&source=gbs_api",
     "canonicalVolumeLink": "https://books.google.com/books/about/The_Google_story.html?id=zyTCAlFPjgYC"
    },
    "saleInfo": {
     "country": "US",
     "saleability": "FOR_SALE",
     "isEbook": true,
     "listPrice": {
      "amount": 11.99,
      "currencyCode": "USD"
     },
     "retailPrice": {
      "amount": 11.99,
      "currencyCode": "USD"
     },
     "buyLink": "https://books.google.com/books?id=zyTCAlFPjgYC&ie=ISO-8859-1&buy=&source=gbs_api"
    },
    "accessInfo": {
     "country": "US",
     "viewability": "PARTIAL",
     "embeddable": true,
     "publicDomain": false,
     "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
     "epub": {
      "isAvailable": true,
      "acsTokenLink": "https://books.google.com/books/download/The_Google_story-sample-epub.acsm?id=zyTCAlFPjgYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
     },
     "pdf": {
      "isAvailable": false
     },
     "accessViewStatus": "SAMPLE"
    }
   }]);
  const [keyword, setKeyword] = useState("");

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
      API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
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
                <div  key={book.id}>
                  <Card border="dark">
                    <Card.Header>
                      <Card.Title style={{ fontWeight: "bold" }}>{book.volumeInfo.title}
                        <Button variant="primary" type="button" className="float-right" 
                          onClick={() => saveBook(index)} >Save</Button>
                        <Button variant="primary" type="button" className="float-right" style={{ marginRight:"5px" }} 
                          href={book.saleInfo.selfLink} >View</Button>
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
