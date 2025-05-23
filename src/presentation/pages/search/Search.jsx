import React, { useEffect, useMemo, useState } from "react";
import * as classes from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import MyInput from "../../components/Input/My_Input";
import { Search } from "@mui/icons-material";
import Todos from "../../components/Todos/Todos";
import { fetchTodosAction } from "../../../app/reducers/todos/todos_actions";
import useSession from "../../../hooks/useSession";
import PleaseLogin from "../../components/PleaseLogin/PleaseLogin";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const { user } = useSession();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex(1);
      dispatch(fetchTodosAction({ search }));
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [dispatch, search]);

  return (
    <div className={classes.searchPage}>
      {!user && <PleaseLogin />}
      {user && (
        <>
          <div className={classes.searchDiv}>
            <MyInput
              label={"Search..."}
              icon={<Search />}
              name={"search"}
              type={"text"}
              onChange={handleSearch}
              value={search}
            />
          </div>
          {index !== 0 && <Todos search={search} />}
        </>
      )}
    </div>
  );
};

export default SearchPage;
