import React, { Component } from 'react';
import {searchOptions} from '../../config';

class Search extends Component {

  createHeaders = (header) => {
    return <div id={header.id} title={header.id} onClick={this.selectOption} className={`search-tab ${header.className} ${this.props.selectedSearch === header.id ? 'selected-search' : ''}`} key={header.id}>
      <span title={header.id} className='header-text'>{header.text}</span>
    </div>
  }

  selectOption = (evt) => {
    this.props.setSearchOption(evt.target.title);
  }

  render() {

    const searchHeaders = searchOptions.map(this.createHeaders);

    return (
      <div className='search-header-container'>
        {searchHeaders}
      </div>
    );
  }
}

export default Search;
