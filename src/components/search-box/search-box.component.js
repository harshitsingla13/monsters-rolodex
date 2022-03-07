import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onSearchChange, placeholderText, className } = this.props;
    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholderText}
          onChange={(e) => {
            onSearchChange(e);
          }}
        ></input>
      </div>
    );
  }
}

export default SearchBox;
