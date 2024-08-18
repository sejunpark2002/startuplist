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
import Pagination from '@mui/material/Pagination';

const ShowCompanies = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;
  // const [filteredCompanies, setFilteredCompanies] = useState(companylist);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    setCurrentPage(1);
  };

  // Step 1: Apply search term filter to the entire company list
  const searchFilteredCompanies = companylist.filter((company) => company.name.toLowerCase().includes(searchTerm));

  // Step 2: Apply category filter to the search-filtered list
  const filteredCompanies = searchFilteredCompanies.filter((company) => selectedCategory === categories[0] || company.category === selectedCategory);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // const filteredCompanies =
  //   selectedCategory === categories[0]
  //     ? companylist
  //     : companylist.filter((company) => company.category === selectedCategory);

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
          <SearchBar onSearch={handleSearch} />
        </Box>

        <Box
          sx={{
            'whiteSpace': 'nowrap',
            'margin': 'auto',
            'maxWidth': '1200px',
            'textAlign': 'center',
            '@media (max-width: 600px)': {
              // Media query for mobile devices
              maxWidth: '80%', // Adjust max width on mobile
              minWidth: 'auto', // Override the fixed minWidth
            },
          }}
        >
          <CarouselButtons categories={categories} handleCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
        </Box>

        <Grid
          container
          spacing={4}
          sx={{
            'padding': '64px',
            '@media (max-width: 600px)': {
              padding: '24px 16px',
            },
          }}
        >
          {currentCompanies.map((company) => (
            <Grid key={company.id} item lg={4} md={4} sm={12} xs={12} onClick={() => navigate(`/startup/${company.id}`, { state: { company } })}>
              <CompanyDetails details={company} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="primary" />
        </Box>
      </Box>
    </>
  );
};

export default ShowCompanies;
