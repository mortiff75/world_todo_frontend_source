import { useTheme } from "@mui/material";
import Header from "../presentation/components/Header/Header";
import Sidebar from "../presentation/components/Sidebar/Sidebar";
import * as classes from "./app_layout.module.css";
import Grid from "@mui/material/Grid";
import MobileMenu from "../presentation/components/MobileMenu/MobileMenu";

const AppLayout = ({ isDark, children }) => {
  const { palette } = useTheme();

  return (
    <>
      <Header isDark={isDark} />

      <MobileMenu />

      <main
        className={classes.main}
        style={{ background: palette.background.default }}
      >
        <Grid container height={"100%"}>
          <Grid sx={{ display: { xs: "none", md: "block" } }} size={{ md: 2 }}>
            <Sidebar />
          </Grid>

          <Grid size={{ md: 10, xs: 12 }} height={"100%"}>
            <div className={`${classes.pages} ${isDark && classes.dark}`}>
              {children}
            </div>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default AppLayout;
