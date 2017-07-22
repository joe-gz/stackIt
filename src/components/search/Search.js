import React, { Component } from 'react';
import axios from 'axios';
import {searchOptions} from '../../config';
import SingleSearch from './SingleSearch';
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
    const apiLink = 'https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=' + userName + '&site=stackoverflow'
    axios.get(apiLink)
    .then(res => {
      console.log(res);
      if (res.data.items.length > 0) {
        this.setState({
          results: 'done',
          isLoading: false
        });
        this.props.setUserResponseData(res.data.items);
      } else {
        this.props.showError();
      }
    }).catch(function (error) {
      console.log(error);
      this.props.showError();
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
        <SingleSearch visible={this.props.selectedSearch === 'searchQuestions'} search={this.searchQuestions} isLoading={this.state.isLoading} changeLoading={this.changeLoading} placeholder='Find by Question' />
        <TagSearch visible={this.props.selectedSearch === 'searchQuestionsTag'} searchTags={this.searchTags} isLoading={this.state.isLoading} changeLoading={this.changeLoading}/>
        <SingleSearch visible={this.props.selectedSearch === 'searchUsers'} search={this.searchUsers} isLoading={this.state.isLoading} changeLoading={this.changeLoading} placeholder='Find User'/>
      </div>
    );
  }
}

export default Search;
