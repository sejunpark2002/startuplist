import React, { useEffect, useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useForm from '../hook/useForm';
import useDebounce from '../hook/useDbounce';

const SearchBar = () => {
  // const [searchInput, setSearchInput] = useState('');

  // const changeSearchInput = (e) => {
  //   const { value } = e.target;
  //   setSearchInput(value);
  //   console.log(value);
  // };
  const [showresult, setShowResult] = useState(false);

  const [{ search }, onFormChange] = useForm({
    search: '',
  });

  const debounce = useDebounce(search, 1000);

  useEffect(() => {
    if (search) {
      setShowResult(true);
      console.log(search);
    }
  }, [debounce]);
  return (
    <>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <TextField
          value={search}
          name="search"
          onChange={onFormChange('search')}
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
            width: '100%',
            maxWidth: '500px',
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
            '@media (max-width: 600px)': {
              // Media query for mobile devices
              maxWidth: '90%', // Adjust max width on mobile
              minWidth: 'auto', // Override the fixed minWidth
            },
          }}
        />
        {showresult && (
          <Box
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
          ></Box>
        )}
      </Box>
    </>
  );
};

export default SearchBar;
