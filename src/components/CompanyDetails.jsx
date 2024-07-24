import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const CompanyDetails = ({ details }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: '#E5E6E6',
            transform: 'scale(1.05)',
            '& img': {
              transform: 'rotate(340deg)',
            },
          },
        }}
      >
        <Stack spacing={2}>
          <Stack direction="row" spacing={1}>
            <img
              alt="logoimage"
              width="36px"
              height="36px"
              src="https://web-summit-avenger.imgix.net/production/logos/original/d8b903542ac250fc3b775a6ae30a6de5621f21af.png?ixlib=rb-3.2.1"
            ></img>
            <Typography
              sx={{
                fontSize: '18px',
                fontFamily: 'Inter',
                fontWeight: '800',
                color: '#1F2836',
              }}
            >
              {details.name}
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: 'regular',
              color: '#4D545E',
            }}
          >
            Best company
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: '13px',
            fontFamily: 'Inter',
            fontWeight: 'regular',
            color: '#4D545E',
          }}
        >
          yoyo
        </Typography>
      </Box>
    </>
  );
};

export default CompanyDetails;
