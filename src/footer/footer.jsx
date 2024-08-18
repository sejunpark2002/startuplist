import React from 'react';
import Stack from '@mui/material/Stack';

import { Typography } from '@mui/material';

const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Stack
        borderTop={1}
        direction="row"
        spacing={8}
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: '#FFFFFF',
          borderColor: '#D0D5DD',
          height: '55px',

          pt: '80px',
          pb: '100px',
        }}
      >
        <Stack>
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
            sx={{
              fontSize: '12px',
              fontFamily: 'Inter',
              fontWeight: '400',
              color: '#1F2836',
            }}
          >
            Copyright © {currentYear}
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              fontFamily: 'Inter',
              fontWeight: '400',
              color: '#1F2836',
            }}
          >
            All rights reserved
          </Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontSize: '14px',
              fontFamily: 'Inter',
              fontWeight: '800',
              color: '#1F2836',
              mb: '15px',
            }}
          >
            Contact
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
            onClick={() => window.open('https://sejportfolio.netlify.app/', '_blank')}
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
        </Stack>
      </Stack>
    </footer>
  );
};

export default footer;
