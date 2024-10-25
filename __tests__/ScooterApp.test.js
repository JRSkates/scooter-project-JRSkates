const { describe, expect, it } = require("@jest/globals");
const ScooterApp = require("../classes/ScooterApp.js");
const User = require("../classes/User.js");

describe("ScooterApp setup", () => {
  const app = new ScooterApp();
  it("should initialize a ScooterApp", () => {
    expect(app.stations).toEqual({
      "Station A": [],
      "Station B": [],
      "Station C": []
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
    console.log(app.registeredUsers);
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
  it.skip("creates a new scooter and adds it to ScooterApp.stations", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a station does not exist", () => {
    // Arrange
    // Act
    // Assert
  });
});

describe("ScooterApp.dockScooter(scooter, station)", () => {
  it.skip("docks a scooter at a station", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a station does not exist", () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip("throws an error if a scooter is already at a station", () => {
    // Arrange
    // Act
    // Assert
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
