import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import fetch from "node-fetch";

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
  }

  GameList() {
    const link = 'http://localhost/spectate';//TODO change for true/dynamic link
    fetch(link)
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
          <NavLink to={value.link}>Game number {rank}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="spectate">
        {this.state.gameList.length === 0 ? <h2>There is no ongoing game to watch</h2> : this.OngoingGameList()}
      </div>
    );
  }
}

export default Spectate;
