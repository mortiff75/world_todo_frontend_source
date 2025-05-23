import { Button, Typography } from "@mui/material";
import * as classes from "./add.module.css";
import MyInput from "../../components/Input/My_Input";
import { Description, TitleOutlined } from "@mui/icons-material";
import { useState } from "react";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createTodosAction } from "../../../app/reducers/todos/todos_actions";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    createdAt: undefined,
    isLoading: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setState((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!state.createdAt) {
      toast.error("Please Choose a Date");
      return;
    }
    setState((pre) => ({ ...pre, isLoading: true }));

    const { isLoading, ...data } = state;
    const result = await dispatch(createTodosAction({ ...data }));

    setState((pre) => ({ ...pre, isLoading: false }));

    // Its Mean respons statusCode 200
    if (result.type === "todos/create/fulfilled") {
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className={classes.addPage}>
      <Typography variant="h1" fontSize={32} letterSpacing={1.2}>
        What Do You Do?
      </Typography>

      <form action="/" className={classes.add_todo__form} onSubmit={handleForm}>
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
            value={undefined}
            onChange={(moment) => {
              const createdAt = new Date(moment.toISOString()).toISOString();
              setState((pre) => ({ ...pre, createdAt }));
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={state.isLoading}
          >
            {state.isLoading ? "Loading" : "Add"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
