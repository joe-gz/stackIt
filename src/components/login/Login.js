import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import store from '../../store';
import {setCurrentUser} from '../../actions/actions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginVisible: true
    };
  }

  login = () => {
    console.log(this.refs);
    axios.post('/signin', {
      username: this.refs.loginusername.input.value,
      password:this.refs.loginpassword.input.value
    })
    .then((response) => {
      console.log(response);
      store.dispatch(setCurrentUser(response.data));
      this.props.history.push('/home');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  signup = () => {
    console.log(this.refs);
    axios.post('/signup', {
      username: this.refs.username.input.value,
      password:this.refs.password.input.value
    })
    .then((response) => {
      console.log(response);
      this.props.history.push('/home');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      this.login();
    }
  }

  handleSignUpPress = (evt) => {
    if (evt.key === 'Enter') {
      this.signup();
    }
  }

  toggleLoginOption = () => {
    if (this.state.loginVisible) {
      this.setState({loginVisible: false});
    } else {
      this.setState({loginVisible: true});
    }
  }

  render() {
    console.log(this);
    const style = {
      margin: 12
    };
    return (
      <div className='login-container'>
        <h1>Stackit</h1>
        <p>A helpful stack overflow search app to save useful questions!</p>
        {!this.state.loginVisible ?
          <div className='Signup'>
            <TextField
              className='signup__form__input'
              hintText='User email'
              onKeyPress={this.handleSignUpPress}
              ref='username'
              name='username' />
            <TextField
              className='signup__form__input'
              hintText='Password'
              onKeyPress={this.handleSignUpPress}
              ref='password'
              type='password'
              name='password' />
              <div className='signup-submit-wrap'>
                <RaisedButton label={'Sign Up'} primary={true} style={style} onTouchTap={this.signup} />
              </div>
          </div> : null
        }
        {this.state.loginVisible ?
          <div className='Login'>
            <TextField
              className='login__form__input'
              hintText='User email'
              onKeyPress={this.handleKeyPress}
              ref='loginusername'
              name='username' />
            <TextField
              className='login__form__input'
              hintText='Password'
              onKeyPress={this.handleKeyPress}
              ref='loginpassword'
              type='password'
              name='password' />
              <div className='login-submit-wrap'>
                <RaisedButton label={'Log In'} primary={true} style={style} onTouchTap={this.login} />
              </div>
          </div> : null
        }
        {this.state.loginVisible ?
          <div onClick={this.toggleLoginOption}>Still need to sign up?</div> :
          <div onClick={this.toggleLoginOption}>Already have a login?</div>
        }
      </div>
    );
  }
}

export default Login;
