import React, { Component } from 'react';
import SingleUser from './SingleUser';

class UserResponse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleUser: 0
    }
  }

  createUserComponents = (user, i) => {
    return <SingleUser data={user} visibleUser={this.state.visibleUser} userIndex={i}/>
  }

  incrementUser = () => {
    let userValue = this.state.visibleUser;
    userValue++;
    this.setState({visibleUser: userValue});
  }

  decrementUser = () => {
    let userValue = this.state.visibleUser;
    userValue--;
    this.setState({visibleUser: userValue});
  }

  render() {

    const userArray = this.props.data.map(this.createUserComponents);

    return (
      <div className={`user-answer-wrap ${this.props.visible ? 'showing-answer' : ''}`}>
        <div className='user-array-wrap'>
          {userArray}
        </div>
        <div className={`switch-buttons prev-button ${this.state.visibleUser === 0 ? 'hidden' : ''}`} onClick={this.decrementUser}></div>
        <div className={`switch-buttons next-button ${this.state.visibleUser === this.props.data.length - 1 ? 'hidden' : ''}`} onClick={this.incrementUser}></div>
      </div>
    );
  }
}

export default UserResponse;
