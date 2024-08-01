import React, { useState, useMemo } from 'react';
import { Stack } from '@mui/system';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CompanyDetails from '../components/CompanyDetails';
import { companylist } from '../data/companylist';
import MyButton from '../components/MyButton';

const ShowCompanies = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    if (category === 'ALL') {
      setSelectedCategory('');
    }
    setSelectedCategory(category);
  };

  const uniqueCategories = useMemo(() => {
    const categories = new Set();
    companylist.forEach((company) => categories.add(company.category));
    return Array.from(categories);
  }, [companylist]);

  const filteredCompanies = selectedCategory
    ? companylist.filter((company) => company.category === selectedCategory)
    : companylist;

  return (
    <>
      <Box sx={{ margin: 'auto', maxWidth: '1400px' }}>
        <Box sx={{ margin: 'auto', maxWidth: '1200px', textAlign: 'center' }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ flexWrap: 'wrap', gap: '10px' }}
          >
            <MyButton
              category={'ALL'}
              handleCategoryClick={handleCategoryClick}
            />
            {uniqueCategories.map((category) => (
              <MyButton
                key={category}
                category={category}
                handleCategoryClick={handleCategoryClick}
              />
            ))}
          </Stack>
        </Box>

        <Grid container spacing={4} padding="64px" sx={{ paddingTop: '64px' }}>
          {filteredCompanies.map((company) => (
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
