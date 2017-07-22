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
        <div className={`${this.state.visibleUser === this.props.data.length - 1 ? 'hidden' : ''}`} onClick={this.incrementUser}>Next</div>
        <div className={`${this.state.visibleUser === 0 ? 'hidden' : ''}`} onClick={this.decrementUser}>Previous</div>
        <div className='user-array-wrap'>
          {userArray}
        </div>
      </div>
    );
  }
}

export default UserResponse;
