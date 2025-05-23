import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "../reducers/theme/theme_reducer";
import { authReducer } from "../reducers/auth/auth_reducer";
import { todosReducer } from "../reducers/todos/todos_reducer";
export const appStore = configureStore({
  reducer: combineReducers({
    theme: themeReducer,
    auth: authReducer,
    todos: todosReducer,
  }),
});
