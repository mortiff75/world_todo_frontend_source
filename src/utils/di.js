import { Container } from "typedi";
import { UserDataApi } from "../data/source/user";
import { UserRepository } from "../data/repository/user_repo";
import RegisterUsecase from "../domain/usecases/user/register";
import LoginUsecase from "../domain/usecases/user/login";
import "reflect-metadata";
import CheckAuthorizeUsecasr from "../domain/usecases/user/check_autohorize";
import LogoutUserUsecase from "../domain/usecases/user/logout";
import { TodosDataApi } from "../data/source/todos";
import TodosRepository from "../data/repository/todos_repo";
import FetchTodosUsecase from "../domain/usecases/todos/fetch";
import UpdateTodosUsecase from "../domain/usecases/todos/update";
import DeleteTodosUsecase from "../domain/usecases/todos/delete";
import CreateTodoUsecase from "../domain/usecases/todos/create";
import FetchTodoUsecase from "../domain/usecases/todos/fetch_todo";

// Users
Container.set({
  id: UserDataApi,
  type: UserDataApi,
});

const userDataApi = Container.get(UserDataApi);

Container.set({
  id: UserRepository,
  value: new UserRepository(userDataApi),
});

const userRepository = Container.get(UserRepository);

Container.set({
  id: RegisterUsecase,
  value: new RegisterUsecase(userRepository),
});

Container.set({ id: LoginUsecase, value: new LoginUsecase(userRepository) });

Container.set({
  id: CheckAuthorizeUsecasr,
  value: new CheckAuthorizeUsecasr(userRepository),
});

Container.set({
  id: LogoutUserUsecase,
  value: new LogoutUserUsecase(userRepository),
});

export const loginUsecase = Container.get(LoginUsecase);
export const registerUsecase = Container.get(RegisterUsecase);
export const checkAuthorizeUsecase = Container.get(CheckAuthorizeUsecasr);
export const logoutUserUsecase = Container.get(LogoutUserUsecase);

// Todso Di

const todosContainer = Container.of("todos");

todosContainer.set({ id: TodosDataApi, value: new TodosDataApi() });
todosContainer.set({
  id: TodosRepository,
  value: new TodosRepository(todosContainer.get(TodosDataApi)),
});
todosContainer.set({
  id: FetchTodosUsecase,
  value: new FetchTodosUsecase(todosContainer.get(TodosRepository)),
});

todosContainer.set({
  id: UpdateTodosUsecase,
  value: new UpdateTodosUsecase(todosContainer.get(TodosRepository)),
});
todosContainer.set({
  id: DeleteTodosUsecase,
  value: new DeleteTodosUsecase(todosContainer.get(TodosRepository)),
});

todosContainer.set({
  id: CreateTodoUsecase,
  value: new CreateTodoUsecase(todosContainer.get(TodosRepository)),
});

todosContainer.set({
  id: FetchTodoUsecase,
  value: new FetchTodoUsecase(todosContainer.get(TodosRepository)),
});

export const todosRepository = todosContainer.get(TodosRepository);

export const fetchTodosUsecase = todosContainer.get(FetchTodosUsecase);

export const updateTodosUsecase = todosContainer.get(UpdateTodosUsecase);
export const deleteTodosUsecase = todosContainer.get(DeleteTodosUsecase);
export const createTodoUsecase = todosContainer.get(CreateTodoUsecase);
export const fetchTodoUsecase = todosContainer.get(FetchTodoUsecase);
// Di for moment js
