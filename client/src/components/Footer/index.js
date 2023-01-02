import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './footer.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4 id='heading'>Created by:</h4>
        <a href='https://github.com/AndrewKamSki'>Andy Kaminski</a>,
           <a href='https://github.com/clbutl'>  Cannon Butler </a>&
           <a href='https://github.com/Edna1999'>  Edna Omadjambe</a>
      </div>
    </footer>
  );
}
export default Footer;
