'use client';

import { CssBaseline, AppBar, Toolbar, Typography, Box, Drawer, Container } from '@mui/material';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const drawerWidth = 240;

  return (
    <>
      <html>
        <body>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
              <Toolbar>
                <Typography variant="h6" noWrap>
                  Game Backlog App
                </Typography>
              </Toolbar>
            </AppBar>
            <Sidebar />
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
              <Toolbar />
              <Container>
                <Box my={4}>{children}</Box>
              </Container>
            </Box>
          </Box>
        </body>
      </html>
    </>
  );
}
