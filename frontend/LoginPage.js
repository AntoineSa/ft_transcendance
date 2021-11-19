import React, { Component } from "react";

class LoginButton extends Component {
  render() {
    return (
     <div>
       <h4>Yo!</h4>
     </div>
    );
  }
}

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h2>hello please login</h2>
        <LoginButton />
      </div>
    );
  }
}

export default LoginPage;
