import {
  Divider,
  ImageList,
  Link,
  Typography,
  Container,
  Box,
} from '@mui/material';
import {LinkGrid} from './LinkGrid';

const imagesList = [
  {
    src: '/assets/linkedin.svg',
    alt: 'linkedin',
  },
  {
    src: '/assets/instagram.svg',
    alt: 'instagram',
  },
  {
    src: '/assets/x_twitter.svg',
    alt: 'x_twitter',
  },
  {
    src: '/assets/facebook.svg',
    alt: 'facebook',
  },
];

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        bgcolor: 'background.paper',
        py: 2,
        borderTop: 1,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100vw',
            margin: '10px 0'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <img src={'/typing.png'} alt={'logo'} width={64} />
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              A7 Vision
            </Typography>
          </Box>
          <LinkGrid />
        </Box>
      </Container>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '5rem',
        }}
      >
        <ImageList sx={{width: 'auto', minHeight: 48, margin: '4px'}} cols={4}>
          {imagesList.map((item) => (
            <Link href="#">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={48}
                style={{margin: '4px'}}
              />
            </Link>
          ))}
        </ImageList>
        <Typography variant="body2" color="text.secondary" align="center">
          {'© Copyright. '}
          All rights reserved {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
};
