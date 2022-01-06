import React, { Component } from "react";
//import { NavLink } from "react-router-dom";
//import fetch from "node-fetch";

//          <NavLink to={value.link}>Game number {rank}</NavLink>
class Spectate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      gameList: [],
    };
  }

  componentDidMount() {
    this.GameList();
    console.log(this.state.gameList.length);
  }

  GameList() {
    const link = 'http://localhost:5000/spectate';//TODO change for true/dynamic link
    fetch(link, {
      method: 'GET',
      mode: 'cors',
     })
     .then(result => result.json())
     .then(
       results => this.setState({ gameList: results }),
       error => this.setState({ error: true })
     );
  }

  OngoingGameList() {
    return this.state.gameList.map((value, rank) => {
      return (
        <li key={value.id}>
          Game number {rank}
        </li>
      );
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="getGamesFailure">
          <h2>An Error Has Occured</h2>
        </div>
      );
    }
    return (
      <div className="ongoingGameList">
        {this.state.gameList.length === 0 ? <h2>There is no ongoing game to watch</h2> : this.OngoingGameList()}
      </div>
    );
  }
}

export default Spectate;
