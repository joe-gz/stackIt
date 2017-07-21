import React, { Component } from 'react';
import axios from 'axios';
import {searchOptions} from '../../config';
import QuestionSearch from './QuestionSearch';
import TagSearch from './TagSearch';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSearch: searchOptions[0].id,
      results: '',
      isLoading: false
    }
  }

  createHeaders = (header) => {
    return <div id={header.id} onClick={this.selectOption} className={`search-tab ${this.state.selectedSearch === header.id ? 'selected-search' : ''}`} key={header.id}>{header.text}</div>
  }

  selectOption = (evt) => {
    this.setState({selectedSearch: evt.target.id})
  }

  changeLoading = () => {
    this.setState({isLoading: true});
  }

  searchQuestions = (question) => {
    const apiLink = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + question + '&site=stackoverflow';
    // const apiLink = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=css%20nav%20bar%20does%20not%20extend%20t&site=stackoverflow';
    axios.get(apiLink)
    .then(res => {
      console.log(res);
      this.setState({
        results: 'done',
        isLoading: false
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  searchUsers = (userName) => {
    // const apiLink = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + userName + '&site=stackoverflow';
    const apiLink = 'https://api.stackexchange.com/docs/users#order=desc&sort=reputation&inname=' + userName + '&filter=default&site=stackoverflow&run=true';
    axios.get(apiLink)
    .then(res => {
      console.log(res);
    }).catch(function (error) {
      console.log(error);
    });
  }

  searchTags = (tags) => {
    // const apiLink = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + question + '&site=stackoverflow';
    const apiLink = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=' + tags + '&site=stackoverflow';
    axios.get(apiLink)
    .then(res => {
      console.log(res);
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {

    const searchHeaders = searchOptions.map(this.createHeaders);

    return (
      <div className='Search'>
        <div className='search-header-container'>
          {searchHeaders}
        </div>
        <QuestionSearch visible={this.state.selectedSearch === 'searchQuestions'} searchQuestions={this.searchQuestions} isLoading={this.state.isLoading} changeLoading={this.changeLoading} />
        <TagSearch visible={this.state.selectedSearch === 'searchQuestionsTag'} searchTags={this.searchTags} isLoading={this.state.isLoading} changeLoading={this.changeLoading}/>
      </div>
    );
  }
}

export default Search;
