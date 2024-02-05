import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export default function MyBacklogPage() {
  const data = [
    { id: 1, title: 'Game 1', platform: 'PC', rating: 5 },
    { id: 2, title: 'Game 2', platform: 'PlayStation', rating: 4 },
    { id: 3, title: 'Game 3', platform: 'Xbox', rating: 3 },
  ];

  return (
    <div>
      <Typography variant="h4" component="h1">
        My Backlog
      </Typography>

      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Platform</TableCell>
                  <TableCell>Rating</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.platform}</TableCell>
                    <TableCell>{item.rating}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
