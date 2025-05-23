class CreateTodoUsecase {
  #repository;

  constructor(repo) {
    this.#repository = repo;
  }

  async call({ newTodo }) {
    return this.#repository.create({ newTodo });
  }
}
export default CreateTodoUsecase;
