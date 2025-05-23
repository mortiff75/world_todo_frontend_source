import { Add, Home, Login, Logout, Search } from "@mui/icons-material";
export const sidebars = [
  {
    id: "/",
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    id: "/search",
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    id: "/add",
    title: "Add",
    url: "/add",
    icon: Add,
  },
  {
    id: "/auth",
    title: "Login/Register",
    url: "/auth",
    icon: Login,
  },
  {
    id: "/logout",
    title: "LogOut",
    url: "/logout",
    icon: Logout,
  },
];
