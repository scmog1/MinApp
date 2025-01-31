import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pages/Bruker.css';

const Bruker = () => {
  return (
    <div className='form-container'>
      <div className='login-container'>
        <div>
          <div>
            <p>Email / telefonnummer:</p>
            <input type='text' placeholder='Email / telefonnumer' />
            <p>Passord:</p>
            <input type='text' placeholder='Passord' />
          </div>
          <button className='login-button'>
            <p>Logg inn</p>
          </button>
        </div>
        <div>
          <Link>Glemt passord?</Link>
          <Link>Registrer deg</Link>
        </div>
      </div>
    </div>
  );
};

export default Bruker;
