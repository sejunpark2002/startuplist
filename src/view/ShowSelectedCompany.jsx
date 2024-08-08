import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { companylist } from '../data/companylist';
import CompanyDetails from '../components/CompanyDetails';

// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const ShowSelectedCompany = () => {
  // const { id } = useParams();
  const { company } = useLocation().state;
  const relatedCompanies = companylist.filter(
    (selected) => selected.category === company.category
  );
  const statuscolor = company.status;
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
      <Box sx={{ maxWidth: '1600px', margin: 'auto', textAlign: 'center' }}>
        <Grid container>
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                borderTop: '20px solid ',
                minHeight: '260px',
                borderColor: getboardercolor(statuscolor),
                padding: '24px',
                cursor: 'pointer',

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Stack spacing={2} alignItems="center">
                <Box
                  component="img"
                  alt="logoimage"
                  src={company.logo_link}
                  sx={{
                    width: '200px',
                    height: '200px',
                    border: '1px solid #E5E5E5',
                    borderRadius: '8px',
                    padding: '5px',

                    // Add border radius here
                  }}
                />

                <Typography
                  sx={{
                    fontSize: '14px',
                    fontFamily: 'Inter',
                    fontWeight: 'regular',
                    color: '#1F2836',
                  }}
                >
                  {company.status}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '24px',
                    fontFamily: 'Inter',
                    fontWeight: '800',
                    color: '#1F2836',
                  }}
                >
                  {company.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '16px',
                    fontFamily: 'Inter',
                    fontWeight: 'regular',
                    color: '#4D545E',
                  }}
                >
                  {company.category}
                </Typography>
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
                  {company.description}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mt: '20px' }}>
                <HomeIcon
                  sx={{ cursor: 'pointer', color: '#838997' }}
                  onClick={() => window.open(company.homepage, '_blank')}
                />
                <LinkedInIcon
                  sx={{ cursor: 'pointer', color: '#838997' }}
                  onClick={() => window.open(company.linkedin, '_blank')}
                />
                <FavoriteIcon sx={{ cursor: 'pointer', color: '#838997' }} />
                12
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            <Stack padding="25px">
              {relatedCompanies.map((company) => (
                <CompanyDetails key={company.id} details={company} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ShowSelectedCompany;
