import React, { useState } from 'react';
import { Stack } from '@mui/system';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CompanyDetails from '../components/CompanyDetails';
import { companylist } from '../data/companylist';
import { categories } from '../data/Categories';
import MyButton from '../components/MyButton';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ShowCompanies = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [showMore, setShowMore] = useState(false);

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

        <Box sx={{ margin: 'auto', maxWidth: '1200px', textAlign: 'center' }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ flexWrap: 'wrap', gap: '10px', mt: '50px' }}
          >
            {/* <MyButton
              category={categories[0]}
              handleCategoryClick={handleCategoryClick}
              isSelected={selectedCategory === categories[0]}
            /> */}
            {categories.map((category) => (
              <MyButton
                key={category}
                category={category}
                handleCategoryClick={handleCategoryClick}
                isSelected={selectedCategory === category}
              />
            ))}
          </Stack>
          <Button
            onClick={() => setShowMore(!showMore)}
            endIcon={showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            variant="text"
          >
            Show More
          </Button>
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
