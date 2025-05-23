class RegisterUsecase {
  #repository;

  constructor(repo) {
    this.#repository = repo;
  }

  async call({ user }) {
    return await this.#repository.register({ user });
  }
}

export default RegisterUsecase;
