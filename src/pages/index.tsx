import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import '../styles/global.css';

const Home = () => {
  return (
    <>
      <Layout>
        <p>This is my home page</p>
        <Link to="/my-dynamic-page/">
          Dynamically Created Page At Build Time
        </Link>
      </Layout>
    </>
  );
};

export default Home;
