class CheckAuthorizeUsecasr {
  #repo;

  constructor(repo) {
    this.#repo = repo;
  }

  async call({ token }) {
    return this.#repo.checkAuthorize({ token });
  }
}

export default CheckAuthorizeUsecasr;
