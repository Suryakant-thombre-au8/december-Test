import React, { Component } from "react";
// import { } from"react-router-dom";
// import "./Css/search.css";
import { fetchByIngrediant } from "../redux/actions/cocktailAction";

class Search extends Component {
  state = {
    searchQuery: "",
  };

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetchByIngrediant()
    this.props.history.push(this.state.searchQuery);
  };

  render() {
    return (
      <form
        className='searchForm input-group mb-3'
        onSubmit={this.handleSubmit}>
        <input
          type='text'
          className='searchInput form-control'
          placeholder='search topics'
          name='searchQuery'
          onChange={this.handleChange}
          value={this.state.searchQuery}
        />
        <input
          className='btn btn-outline-secondary'
          type='submit'
          id='button-addon2'
          value='Search'
        />
      </form>
    );
  }
}

export default Search;