import React, { Component } from 'react';

class QuestionSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleInputChange = (evt) => {
    this.setState({value: evt.target.value});
  }

  runQuery = () => {
    this.props.searchQuestions(this.state.value)
  }

  render() {

    return (
      <div className={`question-search-container ${this.props.visible ? '' : 'hidden'}`}>
        <input className='search-form-input' type='text' placeholder='Question' value={this.state.value} onChange={this.handleInputChange} />
        <div className='search-submit-wrap'>
          <div className='search-link' onClick={this.runQuery}>Search</div>
        </div>
      </div>
    );
  }
}

export default QuestionSearch;
