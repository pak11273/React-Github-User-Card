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
        console.log(user);
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
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            className="App-logo"
            alt="logo"
          />
          <p>
            Github Users <code>API</code>
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Users
          </a> */}
        </header>
        <main className="main">
          <Card user={this.state.user} />
          <h1>Followers</h1>
          <div className="followers">
            {this.state.followers.map((user, i) => {
              return <Card key={i} user={user} />;
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
