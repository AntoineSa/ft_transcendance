import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import App from './App';
import LoginPage from './LoginPage';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'osef',
    };
  }

  render() {
    if (this.state.user === '') {
      return <LoginPage />;
    }
    return (
      <Router>
        <App user={this.props.user}/>
      </Router>
    );
  }
}

export default Main;
