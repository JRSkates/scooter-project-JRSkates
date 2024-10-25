const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  constructor() {
    this.stations = {
        "Station A": [],
        "Station B": [],
        "Station C": []
    };
    this.registeredUsers = {};
  }

  registerUsers(username, password, age) {
    if (age < 18) {
      throw new Error("too young to register");
    } else if (this.registeredUsers[username]) {
      throw new Error("already registered");
    } else {
      this.registeredUsers[username] = new User(username, password, age);
    }
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user) {
      throw new Error("Username or password is incorrect");
    } else if (user.password !== password) {
      throw new Error("Username or password is incorrect");
    } else {
      user.isLoggedIn = true;
    }
  }

  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user) {
      throw new Error("no such user is logged in");
    } else {
      user.isLoggedIn = false;
      console.log("user is logged out");
    }
  }

}

module.exports = ScooterApp;
