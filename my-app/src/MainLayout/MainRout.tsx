// MainRout.tsx
import React from 'react';
import Header from '../layout/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer';

const MainRout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainRout;
