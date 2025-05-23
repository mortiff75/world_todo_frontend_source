class DeleteTodoUsecase {
  constructor(repository) {
    this.repo = repository;
  }

  async call({ todoId }) {
    return this.repo.delete({ todoId });
  }
}

export default DeleteTodoUsecase;
