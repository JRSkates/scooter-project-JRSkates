const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");
const User = require("../classes/User.js");

describe("Scooter setup", () => {
  const scooter =  new Scooter("Fulham")
  it("should initialize a Scooter", () => {
    expect(scooter.station).toBe("Fulham");
    expect(scooter.user).toBe(null);
    expect(scooter.serial).toBe(1);
    expect(scooter.charge).toBe(100)
    expect(scooter.broken).toBe(false);
  })
})

describe("scooter.rent(user)", () => {
  const user = new User("JRSkates", "password", 28)
  const scooter =  new Scooter("Fulham")

  it("checks a scooter out to a user", () => {
    scooter.rent(user)
    expect(scooter.user).toBe(user);
    expect(scooter.station).toBe(null);
  });

  it("throws an error if battery dead or scooter broken", () => {
    scooter.charge = 20;
    expect(() => scooter.rent(user)).toThrow("scooter needs to charge")

    scooter.charge = 100;
    scooter.broken = true;
    expect(() => scooter.rent(user)).toThrow("scooter needs repair")
  });
});

describe("scooter.dock(station)", () => {
  const user = new User("JRSkates", "password", 28)
  const scooter =  new Scooter("Fulham")

  it("returns a scooter to a station", () => {
    scooter.rent(user)
    scooter.dock("Baker Street")
    expect(scooter.user).toBe(null);
    expect(scooter.station).toBe("Baker Street");

    expect(() => scooter.dock("Baker Street")).toThrow("Scooter is already at a station");
  });
});

describe("scooter.charge()", () => {
  it.skip("charges a scooter", () => {
    // Arrange
    // Act
    // Assert
  });
});

describe("scooter.repair()", () => {
  it.skip("repairs a scooter", () => {
    // Arrange
    // Act
    // Assert
  });
});
