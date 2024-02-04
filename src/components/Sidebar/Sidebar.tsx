import styles from "./Sidebar.module.css";
import { Box } from "@mui/system";
import BoltIcon from "@mui/icons-material/Bolt";
import WeatherIcon from "@mui/icons-material/Cloud";
import CitiesIcon from "@mui/icons-material/List";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <Box className={styles.sidebarWrapper}>
      <Box id="header-wrapper">
        <BoltIcon />
      </Box>
      <Box id="menu-wrapper" className={styles.menuWrapper}>
        <Button className={styles.menuItem} startIcon={<WeatherIcon />}>
          Weather
        </Button>
        <Button className={styles.menuItem} startIcon={<CitiesIcon />}>
          Cities
        </Button>
        <Button className={styles.menuItem} startIcon={<MapIcon />}>
          Map
        </Button>
        <Button className={styles.menuItem} startIcon={<SettingsIcon />}>
          Settings
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
