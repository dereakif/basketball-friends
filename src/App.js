import Friend from "./Friend";
import "./App.scss";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import React, { Component } from "react";
import FriendFinder from "./FriendFinder/FriendFinder";
import MyProfile from "./MyProfile/MyProfile";
import Footer from "./Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav home="Home" myProfile="My Profile" />
        <Home />
        <FriendFinder friendPhoto="#" />
        <div className="my-profile">
          <div>My Info</div>
          <div>My Friends</div>
        </div>
        <MyProfile />
        <Footer />
      </div>
    );
  }
}

export default App;
