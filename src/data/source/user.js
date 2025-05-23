export class IUserData {
  register({ user }) {}

  login({ user }) {}

  checkAuthorize({ token }) {}

  logout() {}
}

export class UserDataApi extends IUserData {
  URL = "https://localhost:8000/api/v1";

  async register({ user }) {
    const { email, password, username } = user;

    const response = await fetch(`${this.URL}/user/register`, {
      method: "POST",
      body: JSON.stringify({ email, password, username }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    const result = await response.json();

    return { result, isOk: response.ok };
  }

  async login({ user }) {
    const { email, password } = user;

    const response = await fetch(`${this.URL}/user/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const result = await response.json();

    console.log("l");

    return { result, isOk: response.ok };
  }

  async checkAuthorize() {
    const response = await fetch(`${this.URL}/user`, {
      credentials: "include",
    });

    const result = await response.json();

    return { result, isOk: response.ok };
  }

  async logout() {
    const response = await fetch(`${this.URL}/user/logout`, {
      credentials: "include",
    });

    const result = await response.json();

    return { result, isOk: response.ok };
  }
}
