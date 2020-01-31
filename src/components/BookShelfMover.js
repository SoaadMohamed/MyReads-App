import React, { Component } from "react";

class BookShelfMover extends Component {
  state = {
    value: this.props.shelf
  };

  bookShelfStates = [
    {
      value: "currentlyReading",
      display: "Currently Reading"
    },

    {
      value: "wantToRead",
      display: "Want to Read"
    },

    {
      value: "read",
      display: "Read"
    },

    {
      value: "none",
      display: "None"
    }
  ];

  bookStateChangeHandler = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.onMove(this.props.book, value);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.bookStateChangeHandler}>
          <option value="move" disabled>
            Move to...
          </option>
          {this.bookShelfStates.map(st => (
            <option value={st.value}>{st.display}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default BookShelfMover;
