const User = require('./Scooter.js')

class Scooter {
    static nextSerial = 1;

    constructor(station=null) {
      this.station = station;
      this.user = null;
      this.serial = Scooter.nextSerial++;
      this.charge = 100;
      this.broken = false;
    }

    rent(user) {
        if (this.charge <= 20) {
          throw new Error("scooter needs to charge")
        } else if (this.broken === true) {
          throw new Error("scooter needs repair")
        } else {
          this.user = user;
          this.station = null;
          // console.log(`Scooter ${this.serial} rented to ${user.username}`);
        }      
    }

    dock(station) {
      if (this.station != null) {
        throw new Error("Scooter is already at a station")
      } else {
        this.station = station;
        this.user = null
      }
    }
}

module.exports = Scooter;
