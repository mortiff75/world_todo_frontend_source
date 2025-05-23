class TodoModel {
  #id;
  title;
  description;
  createdAt;
  updatedAt;
  userId;

  constructor({ id, title, description, createdAt, updatedAt, userId }) {
    this.#id = id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.userId = userId;
  }

  fromJson(map) {
    return new TodoModel({
      title: map["title"] ?? undefined,
      description: map["description"] ?? undefined,
      createdAt: map["createdAt"] ?? undefined,
      updatedAt: map["updatedAt"] ?? undefined,
      userId: map["userId"] ?? undefined,
      id: map["id"] ?? undefined,
    });
  }

  toMap() {
    return {
      id: this.#id,
      title: this.title,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      userId: this.userId,
    };
  }
}

export default TodoModel;
