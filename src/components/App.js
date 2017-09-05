import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './login/Login';
import Home from './home/Home';
import NotFound from './errors/NotFound';
import store from '../store';
import {setCurrentUser} from '../actions/actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...store.getState()
    };
  }

  unsubscribe: () => void;

  componentDidMount() {
    console.log(this);
    this.unsubscribe = store.subscribe(this.storeDidUpdate);
    if (!this.state.currentUser.id) {
      console.log('no user!');
      this.fetchUserInfo();
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeDidUpdate:Function = () => {
    this.setState(store.getState());
  };

  fetchUserInfo = () => {
    console.log('fetch user?');
    axios.get('/get-user')
    .then((response) => {
      if (response.data && response.data !== '') {
        store.dispatch(setCurrentUser(response.data.user));
      }
      //  else {
      //   this.props.history.push('/');
      // }
    })
    .catch((error) => {
      console.log(error);
      // this.props.history.push('/');
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login}/>
          {this.state.currentUser.id ?
            <Route path='/home' component={Home}/> : null
          }
          <Route path='*' component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
