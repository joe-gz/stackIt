import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class TagInput extends Component {

  render() {

    return (
      <div>
        <div className='question-input-field-wrap'>
          <TextField hintText='Tag' floatingLabelText='Add tag' value={this.props.value} onKeyPress={this.props.handleKeyPress} onChange={(evt) => {
            this.props.handleInputChange(evt, this.props.indexValue)
          }}/>
        </div>
      </div>
    );
  }
}

export default TagInput;
