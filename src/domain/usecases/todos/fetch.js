class FetchTodosUsecase {
  constructor(repository) {
    this.repo = repository;
  }

  async call({ page, search }) {
    return this.repo.fetchTodos({ page, search });
  }
}

export default FetchTodosUsecase;
