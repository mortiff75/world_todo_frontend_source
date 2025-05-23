import * as clasess from "./Sidebar.module.css";
import { List } from "@mui/material";
import { sidebars } from "../../../constants";
import SidebarItem from "./Item/Sidebar_Item";
import useSession from "../../../hooks/useSession";
import { Person } from "@mui/icons-material";
const Sidebar = () => {
  const { user } = useSession();

  let sidebarItems = sidebars;

  if (user) {
    sidebarItems = sidebarItems.filter(
      (item) => item.title !== "Login/Register"
    );

    sidebarItems.push({
      title: user?.username,
      icon: Person,
      id: "/profile",
      url: "/profile",
    });
  } else {
    sidebarItems = sidebarItems.filter((item) => item.title !== "LogOut");
  }

  return (
    <div className={clasess.sidebar}>
      <List className={clasess.sidebar_menu}>
        {sidebarItems.map((item) => {
          return <SidebarItem key={item.id} item={item} />;
        })}
      </List>
    </div>
  );
};

export default Sidebar;
