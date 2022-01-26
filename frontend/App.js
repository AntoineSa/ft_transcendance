import React, { Component } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Game from "./Game";
import SpectateSalon from "./SpectateSalon";
import SpectateGame from "./SpectateGame";
import UserIndex from "./UserIndex";
import UserProfile from "./UserProfile";
import OwnUserProfile from "./OwnUserProfile";
import Chat from "./Chat";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li key='home'>
            <NavLink to="/">Home</NavLink>
          </li>
          <li key='game'>
            <NavLink to="/game">Game</NavLink>
          </li>
          <li key='spectate'>
            <NavLink to="/spectate">Spectate</NavLink>
          </li>
          <li key='user'>
            <NavLink to="/user">Users</NavLink>
          </li>
          <li key='chat'>
            <NavLink to="/chat">Chat</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

class Home extends Component {
  render () {
    return (
      <div>
        <h2>Hello</h2>
      </div>
    );  
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <div className="content">
            <h3>Sould print something</h3>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/spectate" element={<SpectateSalon />} />
              <Route path ="/spectate/:id" element={<SpectateGame />} />
              <Route path="/user" element={<UserIndex />} />
                <Route path ="/" element={<UserIndex />} />
                <Route path =":id" element={<UserProfile />} />
                <Route path="/me" element={<OwnUserProfile />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
            <h3>Sould have printed something</h3>
          </div>
      </div>
    );
  }
}

export default App;
