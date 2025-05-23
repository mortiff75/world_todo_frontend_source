class FetchTodoUsecase {
  #repository;

  constructor(repo) {
    this.#repository = repo;
  }

  async call({ id }) {
    return this.#repository.fetchTodo({ id });
  }
}

export default FetchTodoUsecase;
