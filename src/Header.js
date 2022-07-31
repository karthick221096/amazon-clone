import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to="/">
      <img 
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
          alt='smile__logo'
       />
      </Link>
       <div className='header__search'>
          <input
             className='header__searchInput'
             type="text"
          />
          <SearchIcon className='header__searchIcon' />

       </div>
       <div className='header__nav'>
        <Link to= {!user && '/login'} >
          <div onClick={handleAuthenticaton} className='header__option'>
             <span className='header__optionLine1'>
               Hello {!user ? 'Guest' : user.email}
             </span>
             <span className='header__optionLine2'>
               {user ? 'Sign Out' : 'Sign In'}
             </span>
          </div>
        </Link>
          <div className='header__option'>
             <span className='header__optionLine1'>
               Return
             </span>
             <span className='header__optionLine2'>
               & orders
             </span>
          </div>
          <div className='header__option'>
             <span className='header__optionLine1'>
               Your
             </span>
             <span className='header__optionLine2'>
               Prime
             </span>
          </div>
          <Link to='/checkout'>
          <div className='header__optionBasket'>
             <ShoppingCartIcon />
             <span className='header__optionLineTwo header__basketCount'>
               {basket?.length}
               {/* /* {basket?.length} The question mark is optional chaining which will handle the error easily */}
             </span>
          </div>
          </Link>
          
       </div>
    </div>
  )
}

export default Header