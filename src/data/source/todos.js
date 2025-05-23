export class ITodosData {
  fetchTodos({ page }) {}

  create({ newTodo }) {}

  fetchTodo({ id }) {}

  update({ todoId, newTodo }) {}

  delete({ todoId }) {}
}

export class TodosDataApi extends ITodosData {
  URL = "https://localhost:8000/api/v1";

  async fetchTodos({ page, search }) {
    const response = await fetch(
      `${this.URL}/todos?page=${page || 1}&search=${search || ""}`,
      {
        credentials: "include",
      }
    );

    const result = await response.json();

    return { ok: response.ok, result };
  }

  async create({ newTodo }) {
    const response = await fetch(`${this.URL}/todos`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newTodo }),
    });

    const result = await response.json();
    console.log(result);

    return { ok: response.ok, result };
  }

  async delete({ todoId }) {
    const response = await fetch(`${this.URL}/todos/${todoId}`, {
      credentials: "include",
      method: "DELETE",
    });

    const result = await response.json();

    return { ok: response.ok, result };
  }

  async update({ todoId, newTodo }) {
    const response = await fetch(`${this.URL}/todos/${todoId}`, {
      credentials: "include",
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    const result = await response.json();

    return { ok: response.ok, result };
  }

  async fetchTodo({ id }) {
    const response = await fetch(`${this.URL}/todos/${id}`, {
      credentials: "include",
    });

    const result = await response.json();
    console.log(result);

    return { ok: response.ok, result };
  }
}
