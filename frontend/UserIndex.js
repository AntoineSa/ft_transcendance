import React, { Component } from "react";
//import { Link } from "react-router-dom";

class UserIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      userList: [],
    };
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    const link = 'http://localhost:5000/user';//TODO dynamic link
    fetch(link, {
      method: 'GET',
      mode: 'cors',
    })
    .then(result => result.json())
    .then(
      results => this.setState({ userList: results }),
      error => this.setState({ error: true })
    );
  }

//              <Link to=":id">Username</Link>

  UserListDiv() {
    return (
      <ul>
        {this.state.userList.map((value, rank) => {
          return (
            <li key={ value.id }>
                <h2>Username</h2>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>An Error Has Occured</h2>
        </div>
      );
    }
    return (
      <div className="UserListDiv">
        {this.state.userList.length === 0 ? <h2>No user yet</h2> : this.UserListDiv()}
      </div>
    );
  }
}

export default UserIndex;
