import React, { useState } from 'react';
// import { Stack } from '@mui/system';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CompanyDetails from '../components/CompanyDetails';
import { companylist } from '../data/companylist';
import { categories } from '../data/Categories';

import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

import CarouselButtons from '../components/CarouselButtons';

const ShowCompanies = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCompanies =
    selectedCategory === categories[0]
      ? companylist
      : companylist.filter((company) => company.category === selectedCategory);

  return (
    <>
      <Box sx={{ margin: 'auto', maxWidth: '1400px' }}>
        <Box
          sx={{
            margin: 'auto',
            maxWidth: '1200px',
            textAlign: 'center',
          }}
        >
          <SearchBar />
        </Box>

        <Box
          sx={{
            margin: 'auto',
            maxWidth: '1200px',
            textAlign: 'center',
            '@media (max-width: 600px)': {
              // Media query for mobile devices
              maxWidth: '80%', // Adjust max width on mobile
              minWidth: 'auto', // Override the fixed minWidth
            },
          }}
        >
          <CarouselButtons
            categories={categories}
            handleCategoryClick={handleCategoryClick}
            selectedCategory={selectedCategory}
          />
        </Box>

        <Grid container spacing={4} padding="64px" sx={{ paddingTop: '64px' }}>
          {filteredCompanies.map((company) => (
            <Grid
              key={company.id}
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              onClick={() =>
                navigate(`/startup/${company.id}`, { state: { company } })
              }
            >
              <CompanyDetails details={company} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ShowCompanies;
