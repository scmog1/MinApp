import React from 'react';
import { Link } from 'react-router-dom';
import '../css/components/Footer.css';
import { scrollToTop } from '../hooks/ScrollToTopp';
import instagramIcon from '../assets/images/instagram.png';
import twitterIcon from '../assets/images/twitter.png';
import youtubeIcon from '../assets/images/youtube.png';
import facebookIcon from '../assets/images/facebook.png';
import { PATH_BANER } from '../router/Routes';
import { PATH_BRUKER } from '../router/Routes';
import { PATH_HJEM } from '../router/Routes';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-buttons'>
        <a
          href='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button>
            <img src={facebookIcon} alt='Facebook' />
          </button>
        </a>
        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button>
            <img src={instagramIcon} alt='Instagram' />
          </button>
        </a>
        <a
          href='https://www.twitter.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button>
            <img src={twitterIcon} alt='Twitter' />
          </button>
        </a>
        <a
          href='https://www.youtube.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button>
            <img src={youtubeIcon} alt='YouTube' />
          </button>
        </a>
      </div>
      <div className='center-footer-buttons'>
        <button>
          <Link to={PATH_BANER} onClcik={scrollToTop}>
            Finn baner
          </Link>
        </button>
        <button>
          <Link to={PATH_BRUKER} onClcik={scrollToTop}>
            Bli medlem
          </Link>
        </button>
        <button>
          <Link to={PATH_HJEM} onClcik={scrollToTop}>
            Om oss
          </Link>
        </button>
      </div>
      <div className='footer-contact'>
        <p className='footer-contact-info'>Kontaktinformasjon:</p>
        <p>
          Epost: <a href='mailto:discgolf@noreply.com'>discgolf@noreply.com</a>
        </p>
        <p>
          Telefon: <a href='tel:12345678'>xxxx xx xxx</a>
        </p>
      </div>
      <div className='footer-title'>
        <p>DISCGOLF</p>
      </div>
    </div>
  );
};

export default Footer;
