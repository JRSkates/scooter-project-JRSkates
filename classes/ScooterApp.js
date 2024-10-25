const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  constructor() {
    this.stations = {
      "Fulham": [],
      "Hammersmith": [],
      "Baker Street": []
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

  createScooter(station) {
    if(!this.stations[station]) {
      throw new Error("no such station");
    }

    const newScooter = new Scooter(station)
    this.stations[station].push(newScooter);

    console.log("created new scooter");
    return newScooter;
  }

  dockScooter(scooter, station) {
    if(!this.stations[station]) {
      throw new Error("no such station");
    }

    if(scooter.station === station) {
      throw new Error("Scooter is already at a station");
    }

    scooter.dock(station);
    this.stations[station].push(scooter);
    console.log("scooter is docked");
  }

  rentScooter(scooter, user) {
    if(scooter.station === null) {
      throw new Error("scooter already rented");
    }

    let found = false;
    for(const station in this.stations) {
      const index = this.stations[station].indexOf(scooter);
        if (index !== -1) {
          this.stations[station].splice(index, 1);
          scooter.user = user;
          scooter.station = null;
          found = true;

          console.log(`Scooter rented to ${user.username}:`, scooter);
          break;
      }
    }
  }

  print() {
    console.log(this.registeredUsers)
    console.log(this.stations)
  }
}

module.exports = ScooterApp;
