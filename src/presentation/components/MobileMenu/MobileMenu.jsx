import * as classes from "./Menu.module.css";
import { motion, AnimatePresence } from "framer-motion";
import SideBar from "../Sidebar/Sidebar";
import { useTheme } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenu = () => {
  const { palette } = useTheme();
  const [isDraweOpen, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(true);
  };

  const closeDrawer = (_) => {
    setDrawer(false);
  };

  return (
    <>
      <GiHamburgerMenu className={classes.hamburger} onClick={handleDrawer} />

      <AnimatePresence mode="wait">
        {isDraweOpen && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            style={{ background: palette.background.default }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
              damping: 400,
              power: 1500,
            }}
            className={classes.menu}
          >
            <div className={classes.btn_hamburger}>
              <Close sx={{ fontSize: 30 }} onClick={closeDrawer} />
            </div>

            <div
              onClick={(e) => {
                setDrawer(false);
              }}
            >
              <SideBar />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
