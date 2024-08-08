import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import logo from '../images/userlogo.png';

const header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        borderBottom={1}
        direction="row"
        spacing={1}
        sx={{
          bgcolor: '#FFFFFF',
          borderColor: '#D0D5DD',
          height: '55px',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {/* <img alt="logoimage" width="24px" height="24px" src={logo}></img> */}
        <Typography
          onClick={() => navigate('/')}
          sx={{
            fontSize: '18px',
            fontFamily: 'Inter',
            fontWeight: '800',
            color: '#1F2836',
            cursor: 'pointer',
          }}
        >
          Startup Hunt
        </Typography>
      </Stack>
    </>
  );
};

export default header;
