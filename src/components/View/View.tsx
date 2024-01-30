import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";
import { Box } from "@mui/system";

const View = () => {
  return (
    <Box id="view-wrapper">
      <SearchBar />
      <Sidebar />
      <Outlet />
    </Box>
  );
};

export default View;
