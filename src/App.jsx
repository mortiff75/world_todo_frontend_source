import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./utils/routes";
import AppLayout from "./layout/app_layout";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./utils/theme";
import { useSelector } from "react-redux";
import AuthLayout from "./layout/auth_layout";
import { ToastContainer } from "react-toastify";
import { AliveScope } from "react-activation";

const App = () => {
  const pathes = useRoutes(routes);

  const { isDark } = useSelector((reducers) => reducers.theme);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <AliveScope>
        <AppLayout isDark={isDark}>
          <AuthLayout>{pathes}</AuthLayout>
        </AppLayout>
        <ToastContainer theme={isDark ? "light" : "dark"} />
      </AliveScope>
    </ThemeProvider>
  );
};

export default App;
