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
      if (res.data.items.length > 0) {
        this.setState({
          results: 'done',
          isLoading: false
        });
        this.props.setResponseData(res.data.items);
      } else {
        this.props.showError();
      }
    }).catch(function (error) {
      console.log(error);
      this.props.showError();
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
      if (res.data.items.length > 0) {
        this.setState({
          results: 'done',
          isLoading: false
        });
        this.props.setResponseData(res.data.items);
      } else {
        this.props.showError();
      }
    }).catch(function (error) {
      console.log(error);
      this.props.showError();
    });
  }

  render() {

    return (
      <div className={`Search ${this.props.visible ? '' : 'remove-search'}`}>
        <QuestionSearch visible={this.props.selectedSearch === 'searchQuestions'} searchQuestions={this.searchQuestions} isLoading={this.state.isLoading} changeLoading={this.changeLoading} />
        <TagSearch visible={this.props.selectedSearch === 'searchQuestionsTag'} searchTags={this.searchTags} isLoading={this.state.isLoading} changeLoading={this.changeLoading}/>
      </div>
    );
  }
}

export default Search;
