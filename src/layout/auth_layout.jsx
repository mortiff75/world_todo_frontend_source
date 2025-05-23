import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuthTokenUserAction } from "../app/reducers/auth/auth_actions";
import useSession from "../hooks/useSession";

const AuthLayout = ({ children }) => {
  const { user } = useSession();

  const authDispatch = useDispatch();

  useLayoutEffect(() => {
    if (!user) {
      authDispatch(checkAuthTokenUserAction());
    }
  }, [user, authDispatch]);

  return <>{children}</>;
};

export default AuthLayout;
