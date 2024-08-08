import React from 'react';
import ShowCompanies from './view/ShowCompanies';

import Header from './header/header';
import { Route, Routes } from 'react-router-dom';
import ShowSelectedCompany from './view/ShowSelectedCompany';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<ShowCompanies />} />
        <Route path="/startup/:id" element={<ShowSelectedCompany />} />
      </Routes>
    </>
  );
};

export default App;
