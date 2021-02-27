import React, { Component } from "react";
import Friend from "../Friend";

import "./FriendFinder.scss";

class FriendFinder extends Component {
  render() {
    const { friendPhoto } = this.props;
    return (
      <div className="friend-finder">
        <img src={friendPhoto} alt="human" />
        <Friend name="akif" lastName="dere" />
        <div>kisi bilgileri</div>
        <button>Find a friend!</button>
        <button>Find a friend!</button>
      </div>
    );
  }
}
export default FriendFinder;
