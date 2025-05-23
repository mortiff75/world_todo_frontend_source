import React, { useState } from "react";
import * as classes from "./Todo_Card.module.css";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardActions,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { Add, Delete, Update } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteTodosAction } from "../../../app/reducers/todos/todos_actions";
import MomentDate from "../../../utils/moment_time";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
const TodoCard = ({ todo }) => {
  const { palette } = useTheme();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteHandler = async () => {
    setLoading(true);
    await dispatch(deleteTodosAction(todo.id));
    setLoading(false);
  };

  const handleUpdateNavigate = () => {
    navigate(`/todo/${todo.id}`);
  };

  return (
    <Grid size={{ sm: 12, md: 6, lg: 4 }}>
      <motion.li
        initial={{ opacity: 0, x: -10 }}
        datatype={todo.id}
        transition={{
          ease: "easeInOut",
          duration: 0.2,
          damping: 450,
          delay: 0.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Card className={classes.todo_card}>
          <CardHeader title={todo.title} sx={{ color: palette.text.primary }} />
          <CardContent className={classes.content}>
            <p
              className={classes.description}
              style={{ color: palette.text.primary }}
            >
              {todo.description}
            </p>
            <span
              style={{
                color: palette.text.primary,
                textDecoration: `${
                  MomentDate.isAfterFromDate({ date: todo.createdAt })
                    ? ""
                    : "line-through"
                }`,
              }}
            >
              {MomentDate.prettyDate({ date: todo.createdAt })}
            </span>
          </CardContent>

          <CardActionArea className={classes.card_action__area}>
            <CardActions>
              <Button startIcon={<Add />}>Add</Button>
              <Button
                variant="outlined"
                startIcon={<Update />}
                onClick={handleUpdateNavigate}
              >
                Update
              </Button>
              <div>
                <Button
                  color="error"
                  startIcon={<Delete />}
                  onClick={deleteHandler}
                >
                  {!loading && "Delete"}

                  {loading && (
                    <CircularProgress
                      variant="indeterminate"
                      color="error"
                      size={36}
                    />
                  )}
                </Button>
              </div>
            </CardActions>
          </CardActionArea>
        </Card>
      </motion.li>
    </Grid>
  );
};

export default React.memo(TodoCard);
