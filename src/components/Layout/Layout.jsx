import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import NavbarView from "../Navbar/NavbarView";

export default function Layout() {
  return (
    <Box
    // sx={{
    //   display: "flex",
    //   flexDirection: "column",
    //   minHeight: "100vh",
    // }}
    >
      <NavbarView />

      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
