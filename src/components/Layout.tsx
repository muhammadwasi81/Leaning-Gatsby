import React from 'react';
import Header from '../components/Header';
import Nav from '../pages/nav';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header text="wasi" subtext="adil" />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
