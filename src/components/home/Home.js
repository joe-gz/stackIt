import React, { Component } from 'react';
import Search from '../search/Search';
import SearchHeaders from '../search/SearchHeaders';
import QuestionResponse from '../answers/QuestionResponse';
import Error from '../errors/Error';
import UserFavorites from '../answers/UserFavorites';
import {searchOptions} from '../../config';

class Home extends Component {

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
      <div className='Home'>
        <SearchHeaders selectedSearch={this.state.selectedSearch} setSearchOption={this.setSearchOption} />
        {this.state.showError ? null :
          <div>
            <Search showError={this.showError} visible={this.state.response.length === 0} selectedSearch={this.state.selectedSearch} setResponseData={this.setResponseData}/>
            <QuestionResponse visible={this.state.response.length > 0} data={this.state.response} />
            <UserFavorites visible={this.state.selectedSearch === 'user-favorites'} />
          </div>
        }
        <Error showError={this.state.showError} />
      </div>
    );
  }
}

export default Home;
