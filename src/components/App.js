import React, { Component } from 'react';
import Search from './search/Search';
import SearchHeaders from './search/SearchHeaders';
import QuestionResponse from './answers/QuestionResponse';
import Error from './errors/Error'
import {searchOptions} from '../config';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: [],
      selectedSearch: searchOptions[0].id,
      showError: false
    }
  }

  setSearchOption = (value) => {
    this.setState({
      selectedSearch: value,
      response: [],
      showError: false
    });
  }

  showError = () => {
    this.setState({
      showError: true,
      selectedSearch: ''
    });
  }

  setResponseData =  (response) => {
    this.setState({
      response: response,
      selectedSearch: ''
    });
  }

  render() {
    return (
      <div className='App'>
        <SearchHeaders selectedSearch={this.state.selectedSearch} setSearchOption={this.setSearchOption} />
        {this.state.showError ? null :
          <Search showError={this.showError} visible={this.state.response.length === 0} selectedSearch={this.state.selectedSearch} setResponseData={this.setResponseData}/>
        }
        {this.state.showError ? null :
          <QuestionResponse visible={this.state.response.length > 0} data={this.state.response} />
        }
        <Error showError={this.state.showError} />
      </div>
    );
  }
}

export default App;
