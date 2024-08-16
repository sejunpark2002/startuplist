import React, { useEffect, useState, useRef } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useForm from '../hook/useForm';
import useDebounce from '../hook/useDbounce';
import { companylist } from '../data/companylist';
import { Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  // const [searchInput, setSearchInput] = useState('');

  // const changeSearchInput = (e) => {
  //   const { value } = e.target;
  //   setSearchInput(value);
  //   console.log(value);
  // };
  const navigate = useNavigate();

  const [showresult, setShowResult] = useState(false);
  const boxRef = useRef(null);

  const [{ search }, onFormChange] = useForm({
    search: '',
  });

  const handlekeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(search);
    }
  };

  const handleSearchClick = () => {
    onSearch(search);
  };

  const debounce = useDebounce(search, 1000);

  const filteredCompanies = companylist.filter((company) => {
    const searchlowercase = search.toLocaleLowerCase();
    return (
      company.name.toLocaleLowerCase().includes(searchlowercase) ||
      company.description.toLocaleLowerCase().includes(searchlowercase)
    );
  });

  useEffect(() => {
    if (search) {
      setShowResult(true);
      console.log(search);
    }
  }, [debounce]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setShowResult(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [boxRef]);

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <TextField
          value={search}
          name="search"
          onChange={onFormChange('search')}
          onKeyDown={handlekeyPress}
          variant="outlined"
          placeholder="Search here"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon cursor="pointer" onClick={handleSearchClick} />
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
            ref={boxRef}
            sx={{
              position: 'absolute',
              top: 'calc(100% + 10px)', // Place the Box just below the TextField
              left: '50%',
              padding: '20px',
              cursor: 'pointer',

              margin: 'auto',
              width: '500px',
              maxHeight: '100vh',
              backgroundColor: '#FFFFFF',
              zIndex: '1',
              transform: 'translate(-50%)',
              overflow: 'auto',
              '@media (max-width: 600px)': {
                // Media query for mobile devices
                maxWidth: '80%', // Adjust max width on mobile
                minWidth: 'auto', // Override the fixed minWidth
              },
            }}
          >
            {filteredCompanies.map((company) => (
              <>
                <Box
                  sx={{
                    my: '10px',
                    padding: '5px',
                    '&:hover': {
                      backgroundColor: '#E5E6E6',
                    },
                  }}
                  onClick={() =>
                    navigate(`/startup/${company.id}`, { state: { company } })
                  }
                >
                  <Stack direction="row" spacing={2}>
                    <img
                      alt="logoimage"
                      width="36px"
                      height="36px"
                      src={company.logo_link}
                    ></img>
                    <Stack sx={{ overflow: 'hidden', flexGrow: 1 }}>
                      <Typography
                        sx={{
                          textAlign: 'left',
                          fontSize: '16px',
                          fontFamily: 'Inter',
                          fontWeight: 'regular',
                          color: '#1F2836',
                        }}
                      >
                        {company.name}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: 'left',
                          fontSize: '12px',
                          fontFamily: 'Inter',
                          fontWeight: 'regular',
                          color: '#1F2836',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          maxWidth: '80%',
                        }}
                      >
                        {company.description}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default SearchBar;
