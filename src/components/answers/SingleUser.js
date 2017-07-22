import React, { Component } from 'react';

class SingleUser extends Component {

  render() {

    console.log(this);
    const className = this.props.userIndex === this.props.visibleUser ? 'visible-user' : this.props.userIndex < this.props.visibleUser ? 'left-align' : 'right-align';
    const style = {
      backgroundImage: 'url(' + this.props.data.profile_image + ')'
    }

    return (
      <div className={`single-user-wrap ${className}`}>
        <div className='user-name'>{this.props.data.display_name}</div>
        <div style={style} className='user-profile-image'></div>
        <div className='user-reputation'>{this.props.data.reputation.toLocaleString()} Reputation</div>
      </div>
    );
  }
}

export default SingleUser;
