import { createSlice } from "@reduxjs/toolkit";
import {
  createTodosAction,
  deleteTodosAction,
  fetchTodoAction,
  fetchTodosAction,
  updateTodoAction,
} from "./todos_actions";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  error: undefined,
  todos: [],
  totalPage: undefined,
  currentPage: 1,
  prevPage: undefined,
  fetchTodo: undefined,
};

const reducers = {};

const tododsSlice = createSlice({
  name: "todos",
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodosAction.fulfilled, (state, action) => {
        state.todos = action.payload.data;
        state.totalPage = action.payload?.totalPage;
        state.currentPage = action.payload?.currentPage;
        state.prevPage = action.payload?.prevPage;
        state.isLoading = false;
      })

      .addCase(fetchTodosAction.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action);

        state.error = action.payload?.message;
      })
      .addCase(createTodosAction.fulfilled, (state, action) => {
        toast.success("New Todo is Created");
      })
      .addCase(createTodosAction.rejected, (state, action) => {
        state.error = action.payload.message;
        toast.error(action.payload.message);
      })
      .addCase(deleteTodosAction.fulfilled, (state, action) => {
        const todoId = action.payload?.todoId;

        state.todos = state.todos.filter((todo) => todo.id !== todoId);
        toast.success("Successfully deleted");
      })
      .addCase(deleteTodosAction, (state, action) => {
        toast.error(action.payload.message);
      })
      .addCase(fetchTodoAction.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodoAction.fulfilled, (state, action) => {
        state.isLoading = false;

        state.fetchTodo = action.payload;
        console.log(state.fetchTodo);
      })
      .addCase(fetchTodoAction.rejected, (state, action) => {
        toast.error(action.payload.message);
        state.isLoading = false;
      });
  },
});

// https://www.youtube.com/watch?v=sKKXr0zGnT0
export const todosReducer = tododsSlice.reducer;
