import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../startup.png';

const header = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate('/');
    window.location.reload();
  };
  return (
    <>
      <Stack
        borderBottom={1}
        direction="row"
        spacing={1}
        onClick={handleclick}
        sx={{
          bgcolor: '#FFFFFF',
          borderColor: '#D0D5DD',
          height: '55px',
          alignItems: 'center',
          padding: '20px',
          cursor: 'pointer',
        }}
      >
        <img alt="logoimage" width="24px" height="24px" src={logo}></img>
        <Typography
          sx={{
            fontSize: '18px',
            fontFamily: 'Inter',
            fontWeight: '800',
            color: '#1F2836',
            cursor: 'pointer',
          }}
        >
          Startup Finder
        </Typography>
      </Stack>
    </>
  );
};

export default header;
