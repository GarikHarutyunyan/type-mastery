import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        bgcolor: 'background.paper',
        py: 6,
        borderTop: 1,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Footer description
        </Typography>
        <Box>
          <Link href="#">Link</Link>
        </Box>
        <Copyright />
      </Container>
    </Box>
  );
};
