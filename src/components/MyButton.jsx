import React from 'react';
import Button from '@mui/material/Button';

export default function MyButton({ category, handleCategoryClick }) {
  return (
    <Button
      onClick={() => handleCategoryClick(category)}
      sx={{
        borderRadius: '60px',
        border: '1px solid rgb(224, 230, 242)',
        backgroundColor: 'rgb(239, 243, 250)',
        color: '#707787',
        fontWeight: '600',
        fontSize: '12px',
        padding: '10px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
        '&:hover': {
          backgroundColor: '#DDDFE2',
        },
      }}
    >
      {category}
    </Button>
  );
}
