import AddPage from "../presentation/pages/add/add";
import AuthPage from "../presentation/pages/auth/Auth";
import HomePage from "../presentation/pages/home/home";
import KeepAlive from "react-activation";
import SearchPage from "../presentation/pages/search/Search";
import UpdatePage from "../presentation/pages/update/Update";
export const routes = [
  {
    element: <HomePage />,

    path: "/",
    id: "home",
  },

  {
    element: (
      <KeepAlive cacheKey="/auth" key={"/auth"}>
        <AuthPage />
      </KeepAlive>
    ),
    path: "/auth",
    id: "login",
  },

  {
    element: (
      <KeepAlive cacheKey="/add" key={"/add"}>
        <AddPage />
      </KeepAlive>
    ),
    path: "/add",
    id: "add",
  },

  {
    element: <SearchPage />,
    path: "/search",
    id: "search",
  },

  {
    element: <UpdatePage />,
    path: "/todo/:id",
    id: "/todo/:id",
  },
];
