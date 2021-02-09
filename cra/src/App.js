import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

import React, { Component } from "react";

class App extends Component {
  state = {
    user: {},
    followers: [],
  };

  componentDidMount() {
    fetch("https://api.github.com/users/pak11273")
      .then((res) => res.json())
      .then((user) => {
        this.setState({ user });
      })
      .catch((err) => console.log(err));

    fetch("https://api.github.com/users/pak11273/followers")
      .then((res) => res.json())
      .then((followers) => {
        this.setState({ followers });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Users
          </a>
        </header>
        <Card user={this.state.user} />
        <h1>Followers</h1>
        <div>
          {this.state.followers.map((user, i) => {
            return <Card key={i} user={user} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
