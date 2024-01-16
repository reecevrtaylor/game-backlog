import { CssBaseline, Container, AppBar, Toolbar, Typography, Box } from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Game Backlog App</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>{children}</Box>
      </Container>
    </>
  );
}
