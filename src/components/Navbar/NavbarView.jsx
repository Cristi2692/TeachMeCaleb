import { useTheme, useMediaQuery, Box, MenuItem, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import useHeaderLogic from "./Navbar";
import {
  StyledAppBar,
  StyledContainer,
  LogoBox,
  StyledLogo,
  MenuIconButton,
  StyledMenu,
  PageButton,
} from "./NavbarStyles";

const pages = ["Home", "El método", "En Nutshell", "Contacto", "Empresas"];

export default function NavbarView() {
  const { anchorEl, open, handleMenu, handleClose } = useHeaderLogic();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:930px)");

  return (
    <StyledAppBar position="static" theme={theme}>
      <StyledContainer maxWidth={false}>
        <Toolbar disableGutters>
          <LogoBox isMobile={isMobile}>
            <StyledLogo src={logo} alt="logo" />
          </LogoBox>
          {isMobile ? (
            <>
              <MenuIconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </MenuIconButton>
              <StyledMenu
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
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleClose}>
                    {page}
                  </MenuItem>
                ))}
              </StyledMenu>
            </>
          ) : (
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
            >
              {pages.map((page) => (
                <PageButton key={page}>{page}</PageButton>
              ))}
            </Box>
          )}
        </Toolbar>
      </StyledContainer>
    </StyledAppBar>
  );
}
