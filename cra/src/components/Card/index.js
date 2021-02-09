import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { username, avatar_url, followers, following } = this.props.user;
    return (
      <div className="card">
        <h1>Github User</h1>
        <div>{username}</div>
        <img src={avatar_url} alt="avatar" />
        <div>{followers}</div>
        <div>{following}</div>
      </div>
    );
  }
}
