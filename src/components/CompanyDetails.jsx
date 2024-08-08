import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';

const CompanyDetails = ({ details }) => {
  const statuscolor = details.status;
  const getboardercolor = (status) => {
    switch (status) {
      case 'ALPHA':
        return '#E54698';
      case 'BETA':
        return '#52BB93';
      case 'GROWTH':
        return '#6D4E9E';
      default:
        return '#000000';
    }
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          borderTop: '5px solid ',
          minHeight: '260px',
          borderColor: getboardercolor(statuscolor),
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
          <Typography
            sx={{
              fontSize: '10px',
              fontFamily: 'Inter',
              fontWeight: 'regular',
              color: '#1F2836',
            }}
          >
            {details.status}
          </Typography>
          <Stack direction="row" spacing={1}>
            <img
              alt="logoimage"
              width="36px"
              height="36px"
              src={details.logo_link}
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
            {details.category}
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: '13px',
            fontFamily: 'Inter',
            fontWeight: 'regular',
            color: '#4D545E',
            overflow: 'hidden',
            textOverflow: 'ellipsis',

            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {details.description}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: '20px' }}>
          <HomeIcon
            sx={{ cursor: 'pointer', color: '#838997' }}
            onClick={() => window.open(details.homepage, '_blank')}
          />
          <LinkedInIcon
            sx={{ cursor: 'pointer', color: '#838997' }}
            onClick={() => window.open(details.linkedin, '_blank')}
          />
          <FavoriteIcon sx={{ cursor: 'pointer', color: '#838997' }} />
          12
        </Stack>
      </Box>
    </>
  );
};

export default CompanyDetails;
