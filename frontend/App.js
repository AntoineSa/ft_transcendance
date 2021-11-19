import React, { Component } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Game from "./Game";
import Spectate from "./Spectate";
import Profile from "./Profile";
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
          <li key='profile'>
            <NavLink to="/profile">Profile</NavLink>
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
              <Route path="/spectate" element={<Spectate />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
            <h3>Sould have printed something</h3>
          </div>
      </div>
    );
  }
}

export default App;
