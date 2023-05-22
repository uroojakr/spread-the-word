import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function AdminAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{ background: "linear-gradient(to left, #6A00FF, #000000)" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem
              onClick={handleCloseNavMenu}
              component={Link}
              to="/Admin/RFL"
            >
              Your RFL Status
            </MenuItem>
            <MenuItem
              onClick={handleCloseNavMenu}
              component={Link}
              to="/Admin/Rewards"
            >
              RFLs
            </MenuItem>
            <MenuItem
              onClick={handleCloseNavMenu}
              component={Link}
              to="/Admin/UserStatus"
            >
              Profile
            </MenuItem>
          </Menu>
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <MenuItem
            onClick={handleCloseNavMenu}
            component={Link}
            to="/Admin/UserStatus"
          >
            User Status
          </MenuItem>
          <MenuItem
            onClick={handleCloseNavMenu}
            component={Link}
            to="/Admin/RFL"
          >
            Admin RFLs
          </MenuItem>
          <MenuItem
            onClick={handleCloseNavMenu}
            component={Link}
            to="/Admin/Rewards"
          >
            Rewards
          </MenuItem>
        </Box>
        <Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem
              onClick={handleCloseUserMenu}
              component={Link}
              to="/Admin/Settings"
            >
              Settings
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AdminAppBar;
