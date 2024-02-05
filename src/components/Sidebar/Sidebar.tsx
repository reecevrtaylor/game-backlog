import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import GamesIcon from '@mui/icons-material/Games';
import Link from 'next/link';

const drawerWidth = 240;

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#212121',
          color: '#fff',
        },
      }}>
      <Toolbar />
      <List>
        {['Home', 'My Backlog'].map((text, index) => (
          <Link href={index % 2 === 0 ? '/' : '/my-backlog'} passHref key={text}>
            <ListItem>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <HomeIcon sx={{ color: '#fff' }} />
                ) : (
                  <GamesIcon sx={{ color: '#fff' }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <button onClick={handleToggle}>Toggle</button>
    </Drawer>
  );
}
