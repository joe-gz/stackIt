import React, { Component } from 'react';

class TagInput extends Component {

  render() {

    return (
      <div>
        <input className='search-form-input' type='text' placeholder='Add tag' value={this.props.value} onChange={(evt) => {
          this.props.handleInputChange(evt, this.props.indexValue)
        }} onKeyPress={this.props.handleKeyPress} />
      </div>
    );
  }
}

export default TagInput;
