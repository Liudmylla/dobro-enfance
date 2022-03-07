import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-center",
  backgroundColor: "#DCDCDC",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 20,
    // minHeight: 128,
  },
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: "flex-center" }}
          >
            <a href="mailto:dobro.enfance@gmail.com">
              {" "}
              dobro.enfance@gmail.com
            </a>
          </Typography>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: "flex-center" }}
          >
            <img
              src="https://i.ibb.co/8bKyGGF/logo-web-transparent-copie.png"
              // src="https://i.ibb.co/C01n794/logo-web-80.jpg"
              alt="logo-web"
              border="0"
              maxWidth="150px"
            />
       </Typography>
           <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: "flex-center" }}
          >
            <a href="https://drive.google.com/file/d/1UBedpA7SVS0n0D36MB_FAEs8uosKZt74/view" target="_blank">
              {" "}
              Faire votre don
            </a>
          </Typography>
          {/* <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton> */}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
