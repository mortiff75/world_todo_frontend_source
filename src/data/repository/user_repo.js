import { IUserRepository } from "../../domain/repository/user";

export class UserRepository extends IUserRepository {
  constructor(iData) {
    super();
    this.data = iData;
  }

  async register({ user }) {
    return await this.data.register({ user });
  }

  async login({ user }) {
    return this.data.login({ user });
  }

  async checkAuthorize({ token }) {
    return this.data.checkAuthorize({ token });
  }

  async logout() {
    return this.data.logout();
  }
}
