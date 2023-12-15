import React from 'react';
import {Grid, Link} from '@mui/material';
import {link} from 'fs';

const links = [
  {
    href: '#',
    title: 'Dashboard',
  },
  {
    href: '#',
    title: 'Docs',
  },
  {
    href: '#',
    title: 'Partnership',
  },
  {
    href: '#',
    title: 'Services',
  },
  {
    href: '#',
    title: 'Blog',
  },
  {
    href: '#',
    title: 'Contact Us',
  },
  {
    href: '#',
    title: 'Support',
  },
  {
    href: '#',
    title: 'Forum',
  },
  {
    href: '#',
    title: 'About Us',
  },
];

export const LinkGrid = () => {
  return (
    <Grid container sx={{justifyContent: 'end'}}>
      <Grid container item spacing={1} xs={10}>
        {links.map((link, index) => (
          <Grid item xs={4} key={`${link}_${index}`}>
            <Link
              href={link.href}
              color={'#000'}
              variant={'body2'}
              underline={'hover'}
              sx={{cursor: 'pointer', fontWeight: 600}}
            >
              {link.title}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
