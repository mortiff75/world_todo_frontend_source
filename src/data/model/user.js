class UserModel {
  #id;
  username;
  email;
  password;
  token;

  constructor({ id, email, password, username, token }) {
    this.#id = id;
    this.email = email;
    this.password = password;
    this.username = username;
    this.token = token;
  }

  set(property, value) {
    this[property] = value;
  }

  get getId() {
    return this.#id;
  }

  fromMap(json) {
    return new UserModel({
      id: json["id"],
      email: json["email"],
      password: json["password"],
      username: json["username"],
    });
  }

  toMap() {
    return new Map({
      email: this.email,
      password: this.password,
      username: this.username,
      id: this.#id,
    });
  }
}

export default UserModel;
