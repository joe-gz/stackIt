import React, { Component } from 'react';
import TagInput from './TagInput';
import RaisedButton from 'material-ui/RaisedButton';

class QuestionSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values: ['', '', '', '', '']
    }
  }

  handleInputChange = (evt, index) => {
    const newArray = this.state.values.slice();
    newArray[index] = evt.target.value;
    this.setState({values: newArray});
  }

  handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      this.runQuery();
    }
  }

  runQuery = () => {
    this.props.changeLoading();
    const regCheck = /^[a-zA-Z0-9]+$/;
    let tagString = '';
    this.state.values.forEach((value)  => {
      if (regCheck.test(value)) {
        tagString += value + ';';
      }
    });
    console.log(tagString);
    this.props.searchTags(tagString);
  }

  createInputs = (value, index) => {
    return <TagInput key={index} value={this.state.values[index]} indexValue={index} handleKeyPress={this.handleKeyPress} handleInputChange={this.handleInputChange} />
  }

  render() {

    // <div className='search-link' onClick={this.runQuery}>
    //   {
    //     this.props.isLoading ?
    //     'Loading':
    //     'Search'
    //   }
    // </div>

    const tagInputs = this.state.values.map(this.createInputs)

    const style = {
      margin: 12
    };

    return (
      <div className={`tag-search-container ${this.props.visible ? '' : 'hidden'}`}>
        {tagInputs}
        <div className='search-submit-wrap'>
          <RaisedButton label={
            this.props.isLoading ? 'Loading...' : 'Search'} primary={true} style={style} onTouchTap={this.runQuery} />
        </div>
      </div>
    );
  }
}

export default QuestionSearch;
