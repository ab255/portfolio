import React from 'react';
import Link from 'react-router';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <Link to='./'>
          <img src="../assets/ABLogo.png" alt="logo" title="Adam Bernard Logo" className='logo' height="50px" width="50px"/>
        </Link>
        <Link to='./'>
          <h1 className='header-text'>adam_BERNARD</h1>
        </Link>
        <nav className='nav'>
          <div className='nav-links'>
            <Link to='/projects'>
              Projects
            </Link>
            <a href='#footer'>Contact</a>
            <a href='../assets/AdamBernardResume.pdf' target='_blank'>Resume</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
 export default Header;
