import React, { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const changeSearchInput = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    console.log(value);
  };

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <TextField
          value={searchInput}
          onChange={changeSearchInput}
          variant="outlined"
          placeholder="Search here"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            mt: '50px',
            width: '500px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '9999px', // Fully rounded corners
              backgroundColor: 'white', // Set the input background to white
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ccc', // Set border color
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#888', // Change border color on hover
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#555', // Change border color when focused
            },
          }}
        />
        {/* <Box
          sx={{
            position: 'absolute',
            top: 'calc(100% + 10px)', // Place the Box just below the TextField
            left: '50%',

            margin: 'auto',
            width: '500px',
            height: '500px',
            backgroundColor: '#FFFFFF',
            zIndex: '1',
            transform: 'translate(-50%)',
          }}
        ></Box> */}
      </Box>
    </>
  );
};

export default SearchBar;
