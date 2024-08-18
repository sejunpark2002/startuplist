import React from 'react';
import Button from '@mui/material/Button';

export default function MyButton({ category, handleCategoryClick, isSelected }) {
  return (
    <Button
      onClick={() => handleCategoryClick(category)}
      sx={{
        'borderRadius': '60px',
        'textTransform': 'none',
        'border': '1px solid rgb(224, 230, 242)',
        'marginRight': '5px',

        'backgroundColor': isSelected ? 'black' : 'rgb(239, 243, 250)',
        'color': isSelected ? 'white' : '#707787',
        'fontWeight': '600',
        'fontSize': '14px',
        'padding': '10px',
        'whiteSpace': 'nowrap', // Prevent text from wrapping to the next line
        'overflow': 'hidden', // Hide any text that overflows the button's width
        'textOverflow': 'ellipsis',

        // overflow: 'hidden',

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
