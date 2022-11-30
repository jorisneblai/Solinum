import { AppBar, CssBaseline, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MapIcon from '@mui/icons-material/Map';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const NavBar = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Solinum
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Formulaire de contribution" as={NavLink} to="/" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Point d'intérêt géolocalisés" as={NavLink} to="/poilist"/>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <MapIcon />
                        </ListItemIcon>
                        <ListItemText primary="Carte" />
                    </ListItemButton>

                </List>

            </Drawer>
        </Box>
    )
}

export default NavBar;