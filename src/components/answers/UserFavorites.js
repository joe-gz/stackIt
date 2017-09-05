import React, { Component } from 'react';
import axios from 'axios';
import store from '../../store';
import {setFavorites} from '../../actions/actions';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class UserFavorites extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...store.getState()
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.storeDidUpdate);
    if (this.state.currentUser.id) {
      this.getFavorites();
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeDidUpdate:Function = () => {
    this.setState(store.getState());
  };

  getFavorites = () => {
    console.log(this.state.currentUser);
    axios.get('/favorites/' + this.state.currentUser.id)
    .then((response) => {
      console.log(response);
      store.dispatch(setFavorites(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  removeFavorite = (evt) => {
    let favoriteId;
    let favoriteIndex;
    if (this.state.favorites.length > 0) {
      this.state.favorites.forEach((favorite, i) => {
        console.log(favorite);
        if (favorite.question_id === parseInt(evt.target.id)) {
          favoriteId = favorite.id;
          favoriteIndex = i;
        }
      });
    }
    axios.delete(`/delete/${favoriteId}/${this.state.currentUser.id}`)
    .then((response) => {
      console.log('completed');
      console.log(response);
      if (this.state.favorites.length > 1) {
        const favorites = this.state.favorites.slice();
        favorites.splice(favoriteIndex, 1);
        store.dispatch(setFavorites(favorites));
      } else {
        store.dispatch(setFavorites([]));
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  createTableRows = (row) => {
    console.log(row);
    let favoriteClass = 'no-favorite';
    let tagString = '';
    if (this.state.favorites.length > 0) {
      tagString = row.tags.join(', ');
      this.state.favorites.forEach(favorite => {
        if (favorite.question_id === row.question_id) {
          favoriteClass = 'favorite';
        }
      });
    }
    return (
      <TableRow key={row.link}>
        <TableRowColumn style={{width: '10%'}}><div onClick={this.removeFavorite} id={row.question_id} className={favoriteClass}></div></TableRowColumn>
        <TableRowColumn style={{width: '45%'}}><a href={row.link} target='_blank'>{row.title}</a></TableRowColumn>
        <TableRowColumn style={{width: '15%'}}>{row.answer_count}</TableRowColumn>
        <TableRowColumn style={{width: '30%'}}>{tagString}</TableRowColumn>
      </TableRow>
    );
  }

  render() {
    console.log(this.state.favorites);
    let tableRows;
    if (this.state.favorites.length > 0) {
      tableRows = this.state.favorites.map(this.createTableRows);
    }
    const height = window.innerHeight - (8 * 16) + 'px';

    return (
      <div className={`favorite-wrap ${this.props.visible ? 'showing-answer' : ''}`}>
        <Table
          fixedHeader={true}
          height={height}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn style={{width: '10%'}}>Star</TableHeaderColumn>
              <TableHeaderColumn style={{width: '45%'}}>Title</TableHeaderColumn>
              <TableHeaderColumn style={{width: '15%'}}>Answers</TableHeaderColumn>
              <TableHeaderColumn style={{width: '30%'}}>Tags</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {this.state.favorites.length > 0 ?
              tableRows : <div>No favorites!</div>
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default UserFavorites;
