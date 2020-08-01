import React from "react";
import Wrapper from "../components/Wrapper";

function Search() {
  return (
    <Wrapper>
      <div className="jumbotron jumbotron-fluid" style={{ marginTop: "80px"}}>
        <div className="container text-center">
          <h1 className="display-4">(React) Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest</p>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid" style={{ marginTop: "20px", paddingTop: "0px", paddingBottom: "20px" }}>
        <div className="container">
          <form>
            <h3 style={{ marginBottom: "20px" }}>Book Search</h3>
            <div className="form-group">
              <label for="keywordInput">Keywords:</label>
              <input type="subit" className="form-control" id="keywordInput" placeholder="Enter keywords to search for" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary pull-right">Search</button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Search;
