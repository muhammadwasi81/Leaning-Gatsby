import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>
          &copy; All right reserved
          <span>&nbsp;{new Date().getFullYear()} </span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
