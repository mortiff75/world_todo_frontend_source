import * as classes from "./index.module.css";
import { Typography, useTheme, Button, Link } from "@mui/material";
import { Email, Password, Person } from "@mui/icons-material";
import MyInput from "../../components/Input/My_Input";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import {
  changeFormLogin,
  updateForm,
} from "../../../app/reducers/auth/auth_reducer";
import { motion, AnimatePresence } from "framer-motion";
import {
  loginUserAction,
  registerUserAction,
} from "../../../app/reducers/auth/auth_actions";
import { Navigate } from "react-router-dom";

const AuthPage = () => {
  const { palette } = useTheme();

  const authDispatch = useDispatch();

  const formState = useSelector((reducers) => reducers.auth);

  if (formState.isAuthorize) {
    return <Navigate to={"/"} />;
  }

  const handleForm = (e) => {
    const { name, value } = e.target;

    authDispatch(updateForm({ name, value }));
  };

  const goToRegister = (e) => {
    e.preventDefault();
    authDispatch(changeFormLogin());
  };

  const submitForm = (e) => {
    e.preventDefault();
    authDispatch(formState.isLogin ? loginUserAction() : registerUserAction());
  };

  return (
    <div className={classes.auth}>
      <Typography fontSize={40} variant="h1" color={palette.text.primary}>
        Authenticate Form
      </Typography>

      <form action="/#" className={classes.auth_form} onSubmit={submitForm}>
        <AnimatePresence mode="wait">
          {formState.isLogin || (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",

                damping: 100,
              }}
            >
              <MyInput
                label="Username"
                name="username"
                type="text"
                value={formState.inputs.username}
                icon={<Person />}
                onChange={handleForm}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <MyInput
          label="Email"
          name="email"
          type="email"
          value={formState.inputs.email}
          icon={<Email />}
          onChange={handleForm}
        />

        <MyInput
          label="Password"
          name="password"
          type="password"
          value={formState.inputs.password}
          icon={<Password />}
          onChange={handleForm}
        />

        <Typography variant="subtitle2" color={palette.text.primary}>
          {formState.isLogin
            ? " you don't have account "
            : "already have an account? "}
          <Link
            variant="subtitle2"
            color={palette.text.secondary}
            href={`${formState.isLogin ? "/auth?login" : "/auth?register"}`}
            onClick={goToRegister}
          >
            {formState.isLogin ? "Register" : "Login"}
          </Link>
        </Typography>

        <Button
          type="submit"
          variant="outlined"
          fullWidth
          disabled={formState.isLoading}
        >
          {formState.isLoading ? (
            <CircularProgress sx={{ color: palette.text.primary }} />
          ) : formState.isLogin ? (
            "Login"
          ) : (
            "Register"
          )}
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;
