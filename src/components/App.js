import React, { Component } from 'react';
import Search from './search/Search';
import SearchHeaders from './search/SearchHeaders';
import QuestionResponse from './answers/QuestionResponse';
import {searchOptions} from '../config';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: [],
      selectedSearch: searchOptions[0].id
    }
  }

  setSearchOption = (value) => {
    this.setState({
      selectedSearch: value,
      response: []
    });
  }

  setResponseData =  (response) => {
    this.setState({response: response});
  }

  render() {
    return (
      <div className='App'>
        <SearchHeaders selectedSearch={this.state.selectedSearch} setSearchOption={this.setSearchOption} />
        <Search visible={this.state.response.length === 0} selectedSearch={this.state.selectedSearch} setResponseData={this.setResponseData}/>
        {this.state.response.length > 0 ?
          <QuestionResponse visible={this.state.response.length > 0} data={this.state.response} /> : null
        }
      </div>
    );
  }
}

export default App;
