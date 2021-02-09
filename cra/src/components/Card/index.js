import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const {
      login,
      location,
      avatar_url,
      followers,
      following,
    } = this.props.user;
    console.log(this.props.user);
    return (
      <div className="card">
        <h4>{login}</h4>
        <img src={avatar_url} alt="avatar" />
        <div>location: {location || "no-info"}</div>
        <div>followers: {followers || "no-info"}</div>
        <div>following: {following || "no-info"}</div>
      </div>
    );
  }
}
