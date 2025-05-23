import { Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

import { GiWorld } from "react-icons/gi";
import * as classes from "./Header.module.css";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../app/reducers/theme/theme_reducer";

const Header = ({ isDark }) => {
  const { palette } = useTheme();

  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <header
      className={classes.header}
      style={{ backgroundColor: palette.background.default }}
    >
      {/* Left */}
      <Grid sx={{ display: { xs: "none", md: "block" } }} item>
        <Typography variant="h1" color={palette.text.primary}>
          World <GiWorld />
        </Typography>
      </Grid>

      {/* Right */}
      <Grid sx={{ justifyItems: { xs: "flex-start" } }} size={{ xs: 12 }} item>
        <div className={classes.div_theme} onClick={(e) => {}}>
          <LightMode
            className={`${classes.light} ${isDark || classes.sun}`}
            fontSize="28"
            sx={{ fontSize: 30, color: "yellow" }}
            onClick={(_) => changeTheme()}
          />
          <DarkMode
            className={`${classes.moon} ${isDark && classes.dark}`}
            sx={{ fontSize: 30, color: "white" }}
            onClick={changeTheme}
          />
        </div>
      </Grid>
    </header>
  );
};

export default Header;
