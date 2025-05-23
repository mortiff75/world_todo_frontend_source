import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import { Description, TitleOutlined } from "@mui/icons-material";
import MyInput from "../../components/Input/My_Input";
import { Button, CircularProgress, Typography, useTheme } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodoAction,
  updateTodoAction,
} from "../../../app/reducers/todos/todos_actions";
import * as classes from "./Update.module.css";
const UpdatePage = () => {
  const { palette } = useTheme();

  const params = useParams();

  const { isLoading, error } = useSelector((store) => store.todos);

  const [state, setState] = useState({
    title: "",
    description: "",
    createdAt: "",
    loading: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setState((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    console.log(state);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!state.createdAt) {
      toast.error("Please Choose a Date");
      return;
    }
    setState((pre) => ({ ...pre, loading: true }));

    const { loading, ...data } = state;
    const result = await dispatch(
      updateTodoAction({ todoId: params.id, newTodo: data })
    );

    setState((pre) => ({ ...pre, isLoading: false }));
    console.log(result);

    // Its Mean respons statusCode 200
    if (result.type === "/todos/update/fulfilled") {
      navigate("/");
      window.location.reload();
    }
  };

  const fetchTodoById = async () => {
    const result = await dispatch(fetchTodoAction(params?.id || ""));

    if (result.type === "todos/fetch_todo/fulfilled") {
      const { createdAt, title, description } = result.payload;
      setState({ createdAt, title, description });
    }
  };

  useEffect(() => {
    fetchTodoById();
  }, []);

  return (
    <>
      <div className={classes.addPage}>
        <Typography variant="h1" fontSize={32} letterSpacing={1.2}>
          Update Todo
        </Typography>

        {isLoading && (
          <CircularProgress
            className={classes.circularProgress}
            sx={{ color: palette.text.primary }}
            size={64}
          />
        )}

        {!error && !isLoading && (
          <form
            action="/"
            className={classes.add_todo__form}
            onSubmit={handleForm}
          >
            <MyInput
              icon={<TitleOutlined />}
              label={"Title"}
              name={"title"}
              type={"text"}
              value={state.title}
              onChange={onChangeHandler}
            />
            <MyInput
              icon={<Description />}
              label={"Description"}
              name={"description"}
              type={"text"}
              value={state.description}
              onChange={onChangeHandler}
            />
            <div className={classes.actions}>
              <BasicDatePicker
                value={state.createdAt}
                onChange={(moment) => {
                  const createdAt = new Date(
                    moment.toISOString()
                  ).toISOString();
                  setState((pre) => ({ ...pre, createdAt }));
                }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={state.loading}
              >
                {state.loading ? "Loading" : "Add"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default UpdatePage;
