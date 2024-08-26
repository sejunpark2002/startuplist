import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Stack
        borderTop={1}
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={8}
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: '#FFFFFF',
          borderColor: '#D0D5DD',
          pt: '40px',
          pb: '40px',
        }}
      >
        <Stack
          alignItems="center"
          spacing={1}
          sx={{
            width: {
              xs: '100%',
              sm: 'auto',
            },
            textAlign: {
              xs: 'center',
              sm: 'center',
            },
            order: {
              xs: 2,
              sm: 1,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: '800',
              color: '#1F2836',
              mb: '15px',
            }}
          >
            Startup Finder
          </Typography>
          <Typography
            component="a"
            href="mailto:sejunparks@gmail.com?subject=Your%20Subject&body=Your%20Message"
            sx={{
              fontSize: '12px',
              fontFamily: 'Inter',
              fontWeight: '400',
              color: '#1F2836',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            sejunparks@gmail.com
          </Typography>
          <Typography
            onClick={() => window.open('https://sjp.simplewebs.ca/', '_blank')}
            sx={{
              fontSize: '12px',
              fontFamily: 'Inter',
              fontWeight: '400',
              color: '#1F2836',
              cursor: 'pointer',
            }}
          >
            Developer&apos;s page
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              fontFamily: 'Inter',
              fontWeight: '400',
              color: '#1F2836',
            }}
          >
            Copyright © {currentYear} All rights reserved
          </Typography>
        </Stack>
      </Stack>
    </footer>
  );
};

export default Footer;
