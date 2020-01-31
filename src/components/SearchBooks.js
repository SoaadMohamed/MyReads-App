import React, { Component } from "react";
import SearchResult from "./SearchResult";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

class SearchBooks extends Component {
  render() {
    const {
      searchBooks,
      myBooks,
      onSearch,
      onResetSearch,
      onMove
    } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={onResetSearch}>
            Close
          </Link>
          <SearchInput onSearch={onSearch} />
        </div>
        <SearchResult
          searchBooks={searchBooks}
          myBooks={myBooks}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default SearchBooks;
