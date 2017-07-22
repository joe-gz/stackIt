import React, { Component } from 'react';

class Error extends Component {

  render() {

    return (
      <div className={`show-error${this.props.showError ? '' : ' hidden'}`}>
        Sorry, but there are no results for your search
      </div>
    );
  }
}

export default Error;
