import { Link } from 'react-router-dom';
import { scrollToTop } from '../hooks/ScrollToTopp';
import {
  PATH_BANER,
  PATH_BRUKER,
  PATH_HJEM,
  PATH_KLUBBER,
  PATH_TURNERING,
} from '../router/Routes';
import '../css/components/Navbar.css';

const Header = () => {
  return (
    // Desktop Nav Links
    <div className='toolbar'>
      <div className='toolbar-title'>
        <Link to={PATH_HJEM} onClick={scrollToTop}>
          DiscGolf
        </Link>
      </div>
      <div className='toolbar-buttons'>
        <button>
          <Link to={PATH_BANER} onClick={scrollToTop}>
            Baner
          </Link>
        </button>
        <button>
          <Link to={PATH_TURNERING} onClick={scrollToTop}>
            Turneringer <br />
            og arrangementer
          </Link>
        </button>
        <button>
          <Link to={PATH_KLUBBER} onClick={scrollToTop}>
            Klubber
          </Link>
        </button>
        <button>
          <Link to={PATH_BRUKER} onClick={scrollToTop}>
            Bruker
          </Link>
        </button>
      </div>
      <input type='text' className='search-bar' placeholder='SØK' />
    </div>
  );
};

export default Header;
