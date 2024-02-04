import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";
import { Box } from "@mui/system";
import styles from "./View.module.css";

const View = () => {
  return (
    <Box id="view-wrapper" className={styles.viewWrapper}>
      <Sidebar />
      <Box id="view-content" className={styles.viewContent}>
        <SearchBar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default View;
