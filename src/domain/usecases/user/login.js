class LoginUsecase {
  #repository;

  constructor(repo) {
    this.#repository = repo;
  }

  async call({ user }) {
    return await this.#repository.login({ user });
  }
}

export default LoginUsecase;
