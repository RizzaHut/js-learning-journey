class User {
  constructor(name, username) {
    this.name = name;
    this._username = username;
  }

  set username(value) {
    return this._username = value.toLocaleLowerCase();
  }

  get username() {
    return `@${this._username}`;
  }

}

// don't touch below this line

export { User };
