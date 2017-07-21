import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class TagInput extends Component {

  render() {

    return (
      <div>
        <div className='question-input-field-wrap'>
          <TextField hintText='Question' floatingLabelText='Add tag' value={this.props.value} onChange={(evt) => {
            this.props.handleInputChange(evt, this.props.indexValue)
          }} onKeyPress={this.props.handleKeyPress}/>
        </div>
      </div>
    );
  }
}

export default TagInput;
