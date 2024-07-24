import React from 'react';
// import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CompanyDetails from '../components/CompanyDetails';
import { companylist } from '../data/companylist';

const ShowCompanies = () => {
  return (
    <>
      <Box sx={{ margin: 'auto' }}>
        <Grid container spacing={4} padding="64px" sx={{ paddingTop: '64px' }}>
          {companylist.slice(-5).map((company) => (
            <Grid key={company.id} item lg={4} md={4} sm={12} xs={12}>
              <CompanyDetails details={company} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ShowCompanies;
