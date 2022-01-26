import React, { Component } from "react";
import { useParams } from "react-router-dom";
//import fetch from "node-fetch";

class SpectateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      error: false,
      user1: null,
      user1_score: 0,
      user2: null,
      user2_score: 0
    };
  }

  componentDidMount() {
    this.Spectate();
  }

  Spectate() {
    this.setState({ id : this.props.id });
    const link = 'http://localhost:5000/spectate/' + this.props.id;//TODO change for true/dynamic link
    fetch(link, {
      method: 'GET',
      mode: 'cors',
     })
     .then(result => result.json())
     .then(
       results => this.setState({
         user1: results.user1,
         user1_score: results.user1_score,
         user2: results.user2,
         user2_score: results.user2_score,
       }),
       error => this.setState({ error: true })
     );
  }

  render() {
    if (this.state.error) {
      console.log(this.state.gameList.length);
      return (
        <div className="getGamesFailure">
          <h2>An Error Has Occured</h2>
        </div>
      );
    }
    return (
      <div className="spectateGame">
        <h4>player 1</h4>
        <h5>{this.state.user1}</h5>
        <h5>score : {this.state.user1_score}</h5>
        <h4>player 2</h4>
        <h5>{this.state.user2}</h5>
        <h5>score : {this.state.user2_score}</h5>
      </div>
    );
  }
}


export default function SpectateGame() {
  const id = useParams().id;
  return (
      <SpectateComponent id={id} />
  );
}

//export default Spectate;
