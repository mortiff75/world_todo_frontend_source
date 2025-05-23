class UpdateTodoUsecase {
  constructor(repository) {
    this.repo = repository;
  }

  async call({ todoId, newTodo }) {
    return this.repo.update({ todoId, newTodo });
  }
}

export default UpdateTodoUsecase;
