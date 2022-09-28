import { Link } from 'gatsby';
import React from 'react';

const Nav = () => {
  return (
    <>
      <nav
        style={{
          backgroundColor: 'red',
          height: '10vh',
          padding: '10px 20xpx',
          color: 'white',
        }}
      >
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            listStyle: 'none',
            alignItems: 'center',
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
