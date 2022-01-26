import React, { Component } from "react";
import { Link } from "react-router-dom";
//import fetch from "node-fetch";

class SpectateSalon extends Component {
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
    const link = 'http://localhost:5000/spectate/';//TODO change for true/dynamic link
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
    return (
      <ul>
        {this.state.gameList.map((value, rank) => {
        return (
          <li key={value.id}>
            <h4>Game number {rank}</h4>
            <Link to="/user/:id">{value.user2}</Link>
            <h4>score : {value.user1_score}</h4>
            <Link to="/user/:id">{value.user2}</Link>
            <h4>score : {value.user2_score}</h4>
            <Link to={"/spectate/" + value.id}>Game number {rank}</Link>
          </li>
        );
      })}
      </ul>
    );
  }

  render() {
    console.log(this.state.gameList.length);
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

export default SpectateSalon;
