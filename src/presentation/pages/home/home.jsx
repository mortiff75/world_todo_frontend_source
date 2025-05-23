import { useEffect } from "react";
import * as classes from "./index.module.css";
import usSession from "../../../hooks/useSession";
import PleaseLogin from "../../components/PleaseLogin/PleaseLogin";
import { useDispatch } from "react-redux";
import { fetchTodosAction } from "../../../app/reducers/todos/todos_actions";
import Todos from "../../components/Todos/Todos";

const HomePage = () => {
  const { user } = usSession();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchTodosAction());
    }
  }, [dispatch, user]);

  return (
    <div className={classes.home}>
      {!user && <PleaseLogin />}

      {user && <Todos />}
    </div>
  );
};

export default HomePage;
