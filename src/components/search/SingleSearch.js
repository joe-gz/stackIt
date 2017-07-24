import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class SingleSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleInputChange = (evt) => {
    this.setState({value: evt.target.value});
  }

  handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      this.runQuery();
    }
  }

  runQuery = () => {
    this.props.changeLoading();
    this.props.search(this.state.value);
  }

  render() {

    const style = {
      margin: 12
    };
    // <input className='search-form-input' type='text' placeholder='Question' value={this.state.value} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />

    return (
      <div className={`question-search-container ${this.props.visible ? '' : 'hidden'}`}>
        <div className='question-input-field-wrap'>
          <TextField hintText='Search' floatingLabelText={this.props.placeholder} value={this.state.value} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress}/>
        </div>
        <div className='search-submit-wrap'>
          <RaisedButton label={
            this.props.isLoading ? 'Loading...' : 'Search'} primary={true} style={style} onTouchTap={this.runQuery} />
        </div>
      </div>
    );
  }
}

export default SingleSearch;
