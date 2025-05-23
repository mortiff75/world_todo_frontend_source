import { ListItem, useTheme } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import * as classes from "./Sidebar_Item.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../../../../app/reducers/auth/auth_actions";

const SidebarItem = ({ item }) => {
  const { palette } = useTheme();

  const { isDark } = useSelector((reducer) => reducer.theme);

  const { pathname } = useLocation();

  const authDispatch = useDispatch((store) => store.auth.isAuthorize);

  const activeDarkClass =
    pathname === item.url && isDark && classes.active_dark__mode;

  const activeLightClass =
    pathname === item.url && !isDark && classes.active_light__mode;

  const logout = (e) => {
    e.preventDefault();

    authDispatch(logoutUserAction());
  };

  return (
    <ListItem className={classes.sidebar_item}>
      <NavLink
        className={`${classes.sidebar_item__link} ${activeDarkClass} ${activeLightClass}`}
        to={item.url}
        style={{ color: palette.text.primary }}
        onClick={item.title === "LogOut" && logout}
      >
        <h2>{item.title}</h2>
        {<item.icon />}
      </NavLink>
    </ListItem>
  );
};

export default SidebarItem;
