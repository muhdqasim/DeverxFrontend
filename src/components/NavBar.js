import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerWidth = 240;
  const menuItems = [
    "services",
    "Resources",
    "Portfolio",
    "Blogs",
    "About",
    "Contact",
  ];
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((previousState) => !previousState);
  };
  const navigate = useNavigate();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            edge="start"
            sx={{
              // display: { sm: "block" },
              alignItems: "flex-start",
              justifyContent: "center",
              flexGrow: 1,
              "&:hover": {
                cursor: "pointer",
              },
              input: { cursor: "pointer" },
            }}
            onClick={() => navigate("/")}
          >
            <img
              src="https://deverx.co.uk/wp-content/uploads/2022/02/New-Project-3.png"
              alt="logo"
              height="60"
              width="220"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              marginLeft: "auto",
            }}
          >
            {menuItems.map((menuItem) => (
              <Button
                key={menuItem}
                sx={{ color: "#fff", paddingX: 3 }}
                onClick={() => navigate("/" + menuItem.toLowerCase())}
              >
                {menuItem}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius....
        </Typography> */}
      </Box>
    </Box>
  );
}
