class LogoutUserUsecase {
  #repository;

  constructor(repo) {
    this.#repository = repo;
  }

  async call() {
    return this.#repository.logout();
  }
}

export default LogoutUserUsecase;
