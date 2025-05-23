import { ITodosRepository } from "../../domain/repository/todos";

class TodosRepository extends ITodosRepository {
  constructor(source) {
    super();
    this.data = source;
  }
  async fetchTodos({ page, search }) {
    return this.data.fetchTodos({ page, search });
  }

  async create({ newTodo }) {
    return this.data.create({ newTodo });
  }

  async update({ todoId, newTodo }) {
    return this.data.update({ todoId, newTodo });
  }

  async delete({ todoId }) {
    return this.data.delete({ todoId });
  }

  async fetchTodo({ id }) {
    return this.data.fetchTodo({ id });
  }
}

export default TodosRepository;
