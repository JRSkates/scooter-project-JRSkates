const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");
const user = new User("JRSkates", "password", 28)

describe("User constructor", () => {
  it("should initialize a User", () => {
    expect(user.username).toBe("JRSkates");
    expect(user.password).toBe("password");
    expect(user.age).toBe(28);
    expect(user.isLoggedIn).toBe(false);
  });
})

describe("user.login(password)", () => {
  it("logs a user in if the password is correct", () => {
    user.login("password")
    expect(user.isLoggedIn).toBe(true);
  });

  it("throws an error if the password is incorrect", () => {
    expect(() => user.login("wrong password").toThrow("incorrect password"))
  });
});

describe("user.logout()", () => {
  it("logs a user out", () => {
    user.login("password")
    user.logout();
    expect(user.isLoggedIn).toBe(false);
  });
});
