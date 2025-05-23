import React from "react";
import * as classes from "./Todos.module.css";
import {
  Button,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import TodoCard from "../TodoCard/Todo_Card";
import { useDispatch, useSelector } from "react-redux";
import PaginationRounded from "../Pagination/Pagination";
import { fetchTodosAction } from "../../../app/reducers/todos/todos_actions";
import { NavLink } from "react-router-dom";

const Todos = ({ search }) => {
  const todosState = useSelector((store) => store.todos);
  const { palette } = useTheme();
  const dispatch = useDispatch();

  return (
    <div className={classes.section_todos}>
      {todosState.isLoading && (
        <CircularProgress
          className={classes.circularProgress}
          sx={{ color: palette.text.primary }}
          size={64}
        />
      )}

      {todosState.error && <h1>{todosState.error}</h1>}

      {!todosState.isLoading && !todosState.error && (
        <>
          {todosState.todos.length === 0 && (
            <>
              <div className={classes.section_emptyList__Todo}>
                <Typography variant="h1" fontSize={30}>
                  Opps... You don't have any Todo (:
                </Typography>

                <NavLink to={"/add"}>
                  <Button variant="contained">
                    Maybe you want to add Todo 😊
                  </Button>
                </NavLink>
              </div>
            </>
          )}

          {todosState.todos.length > 0 && (
            <>
              <Grid container spacing={2} justifyContent={"center"}>
                {todosState.todos.map((todo, index) => (
                  <TodoCard key={todo.id} todo={todo} />
                ))}
              </Grid>
              <PaginationRounded
                count={todosState.totalPage}
                page={todosState.currentPage}
                onChange={(page) => {
                  dispatch(fetchTodosAction({ page, search }));
                }}
              />
              <div style={{ paddingBottom: 200 }}></div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default React.memo(Todos);
