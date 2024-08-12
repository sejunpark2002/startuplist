import React from 'react';
import Button from '@mui/material/Button';

export default function MyButton({
  category,
  handleCategoryClick,
  isSelected,
}) {
  return (
    <Button
      onClick={() => handleCategoryClick(category)}
      sx={{
        borderRadius: '60px',
        textTransform: 'none',
        // border: '1px solid rgb(224, 230, 242)',

        border: '2px solid blue',
        backgroundColor: isSelected ? 'black' : 'rgb(239, 243, 250)',
        color: isSelected ? 'white' : '#707787',
        fontWeight: '600',
        fontSize: '14px',
        padding: '10px',
        whiteSpace: 'nowrap',
        minWidth: '250px',
        maxWidth: '250px',

        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // maxWidth: '100%',
        '&:hover': {
          backgroundColor: isSelected ? '#707787' : '#DDDFE2',
        },
      }}
    >
      {category}
    </Button>
  );
}
