import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createTodoUsecase,
  deleteTodosUsecase,
  fetchTodosUsecase,
  fetchTodoUsecase,
  updateTodosUsecase,
} from "../../../utils/di";

export const fetchTodoAction = createAsyncThunk(
  "todos/fetch_todo",
  async (todoId, thunkApi) => {
    try {
      const { ok, result } = await fetchTodoUsecase.call({ id: todoId });

      if (!ok) throw result;

      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: error?.message || error.toString(),
      });
    }
  }
);

export const fetchTodosAction = createAsyncThunk(
  "todos/",
  async (action, thunkApi) => {
    try {
      const { result, ok } = await fetchTodosUsecase.call({
        page: action?.page || 1,
        search: action?.search || "",
      });

      if (!ok) throw result;

      return result;
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: error?.message ?? error.toString(),
      });
    }
  }
);

export const createTodosAction = createAsyncThunk(
  "todos/create",
  async (newTodo, thunkApi) => {
    try {
      const { result, ok } = await createTodoUsecase.call({ newTodo });

      if (!ok) throw result;

      return { newTodo };
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: error?.message || "Something went wrong for createTodo",
      });
    }
  }
);

export const deleteTodosAction = createAsyncThunk(
  "todos/delete",
  async (todoId, thunkApi) => {
    try {
      const { result, ok } = await deleteTodosUsecase.call({ todoId });

      if (!ok) throw result;

      return { todoId };
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: error?.message || "Something went wrong for delete",
      });
    }
  }
);

export const updateTodoAction = createAsyncThunk(
  "/todos/update",
  async ({ todoId, newTodo }, thunkApi) => {
    try {
      const { ok, result } = await updateTodosUsecase.call({ newTodo, todoId });

      if (!ok) throw result;

      return result;
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: error?.message || "Something went wrong for Update Todo",
      });
    }
  }
);
