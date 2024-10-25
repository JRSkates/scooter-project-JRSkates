class User {
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.isLoggedIn = false;
  }

  login(password) {
    if (password != this.password) {
      throw new Error("incorrect password");
    } else {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.isLoggedIn = false;
  }
}

module.exports = User;
