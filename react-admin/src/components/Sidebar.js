import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles'; 
import { Drawer, Box, Typography, IconButton, List, ListItemButton, ListItemText, Toolbar, Divider, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pages = ['Dashboard', 'Clients', 'Tickets', 'Calendar', 'Documents', 'Reports', 'Administration'];
  const theme = useTheme();

  const pageRoutes = {
    'Dashboard': '/dashboard',
    'Clients': '/clients',
    'Tickets': '/tickets',
    'Calendar': '/calendar',
    'Documents': '/documents',
    'Reports': '/reports',
    'Administration': '/administration',
  };

  // Route mappings for settings if needed

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <AdbIcon />
        <Typography variant="h6" noWrap>
          MSP
        </Typography>
      </Toolbar>
      <Divider sx={{ borderColor: 'gray' }} />
      <List>
        {pages.map((page) => (
          <ListItemButton key={page} component={Link} to={pageRoutes[page]}>
            <ListItemText primary={page} />
          </ListItemButton>
        ))}
      </List>
      <Divider sx={{ borderColor: 'gray' }}/>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth, 
            backgroundColor: theme.palette.info.main, // Use the theme's info main color
            border: '2px solid gray'
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        {/* Main content here */}
      </Box>
    </Box>
  );
}

export default Sidebar;
