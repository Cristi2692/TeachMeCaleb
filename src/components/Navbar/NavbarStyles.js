import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { IconButton, Menu, Button } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: 'none',
  height: '115px',
  borderBottom: `1px solid ${theme.palette.primary.light}`,
}));

export const StyledContainer = styled(Container)({
  width: '97%',
});

export const LogoBox = styled('div')(({ isMobile }) => ({
  flexGrow: 0,
  justifyContent: 'flex-start',
  marginLeft: isMobile ? -3 : 0,
}));

export const StyledLogo = styled('img')({
  height: '115px',
  width: 'auto',
});

export const MenuIconButton = styled(IconButton)({
  marginLeft: 'auto',
});

export const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
      backgroundColor: "#111111",
      color: 'white',
      border:  "1px solid #5A5A59",
    },
  });

export const PageButton = styled(Button)({
  color: 'white',
  display: 'block',
  marginX: 2,
  fontSize: '13px',
  fontWeight: 500,
});
