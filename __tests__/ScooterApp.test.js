const { describe, expect, it } = require("@jest/globals");
const ScooterApp = require("../classes/ScooterApp.js");
const User = require("../classes/User.js");
const Scooter = require("../classes/Scooter.js");

describe("ScooterApp setup", () => {
  const app = new ScooterApp();
  it("should initialize a ScooterApp", () => {
    expect(app.stations).toEqual({
      "Fulham": [],
      "Hammersmith": [],
      "Baker Street": []
    });
    expect(app.registeredUsers).toEqual({});
  });
})

describe("ScooterApp.registerUser(username, password, age)", () => {
  const app = new ScooterApp();
  it("registers a new user if old enough", () => {
    app.registerUsers("JRSkates", "password", 28)
    expect(app.registeredUsers["JRSkates"]).toBeTruthy();
  });

  it("throws an error if too young or already registered", () => {
    expect(() => app.registerUsers("TestUser1", "newpassword", 10)).toThrow("too young to register")

    app.registerUsers("JackUser", "password", 28)
    expect(() => app.registerUsers("JackUser", "password2", 34)).toThrow("already registered");
  });
});

describe("ScooterApp.loginUser(username, password)", () => {
  const app = new ScooterApp();
  it("logs in a registered user", () => {
    app.registerUsers("JRSkates", "password", 28)
    app.loginUser("JRSkates", "password");
    expect(app.registeredUsers["JRSkates"].isLoggedIn).toBe(true);
  });

  it("throws an error if user not found or password incorrect", () => {
    expect(() => app.loginUser("TestUser1", "newpassword")).toThrow("Username or password is incorrect")

    app.registerUsers("JackSkates", "password1", 29)
    expect(() => app.loginUser("JackSkates", "passwordwrong")).toThrow("Username or password is incorrect")
  });
});

describe("ScooterApp.logoutUser(username)", () => {
  const app = new ScooterApp();
  it("logs out a registered user", () => {
    app.registerUsers("JRSkates", "password", 28)
    app.loginUser("JRSkates", "password");
    app.logoutUser("JRSkates");
    expect(app.registeredUsers["JRSkates"].isLoggedIn).toBe(false);
  });

  it("throws an error if user not found", () => {
    expect(() => app.logoutUser("TestUser")).toThrow("no such user is logged in");
  });
});

describe("ScooterApp.createScooter(station)", () => {
  const app = new ScooterApp();
  it("creates a new scooter and adds it to ScooterApp.stations", () => {
    app.createScooter("Fulham")
    expect(app.stations["Fulham"][0].station).toBe('Fulham');
    expect(app.stations["Fulham"][0].user).toBe(null);
  });

  it("throws an error if a station does not exist", () => {
    expect(() => app.createScooter("Earls Court")).toThrow("no such station");
  });
});

describe("ScooterApp.dockScooter(scooter, station)", () => {
  const app = new ScooterApp();
  it("docks a scooter at a station", () => {
    const scooter = new Scooter()
    app.dockScooter(scooter, "Fulham")

    expect(app.stations["Fulham"][0].station).toBe('Fulham');
  });

  it("throws an error if a station does not exist", () => {
    const scooter = new Scooter()
    expect(() => app.dockScooter(scooter, "Earls Court")).toThrow("no such station");
  });

  it("throws an error if a scooter is already at a station", () => {
    const scooter = new Scooter("Fulham")
    expect(() => app.dockScooter(scooter, "Fulham")).toThrow("Scooter is already at a station");
  });
});

describe("ScooterApp.rentScooter(scooter, user)", () => {
  it.skip("rents a scooter out to a user", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a scooter is already rented", () => {
    // Arrange
    // Act
    // Assert
  });
});
