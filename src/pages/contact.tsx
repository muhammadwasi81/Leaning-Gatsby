import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="name" placeholder="name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Number" />
      </div>
    </Layout>
  );
};

export default Contact;
