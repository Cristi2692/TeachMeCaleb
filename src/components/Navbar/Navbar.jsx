import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useTheme, useMediaQuery } from "@mui/material";
import { Box, Button, Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";

const pages = ["Home", "El método", "En Nutshell", "Contacto", "Empresas"];

export default function HeaderView() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:930px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.primary.main,
        boxShadow: "none",
        height: "130px",
        borderBottom: `1px solid ${theme.palette.primary.light}`,
      }}
    >
      <Container maxWidth={false} sx={{ width: "97%" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src={logo}
              alt="logo"
              style={{ height: "130px", width: "auto" }}
            />
          </Box>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    border: `1px solid ${theme.palette.primary.light}`,
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleClose}>
                    {page}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: "white",
                    display: "block",
                    mx: 2,
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
