/*eslint-disable*/ 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/planet.png';

const NavBar = () => {
  // const [menuState, setMenuState] = useState('menu');
  
  // const breakPoint = window.matchMedia('(max-width: 786px)');
  // const [displayState, setDisplayState] = useState(mediaMatch.matches);


  // const handleMenu = (e) => {
  //   if (e.target.textContent === 'menu') {
  //     setMenuState('cancel');
  //     console.log(breakPoint.matches);
  //   } else {
  //     setMenuState('menu');
  //   }
  // };

  // const test = () => {
  //   if ((breakPoint.matches)) {
  //     return true
  //   }
  //   return false;
  // }

  return (
    <div className="navs">
      <div className="NavBar">
        <img src={logo} alt="logo" />
        <h1> Space Rockets</h1>
      </div>
      <div className="Links">
        {/* <button
          type="button"
          name="menu"
          className="menu-btn"
          onClick={handleMenu}
        >
          <span className="material-symbols-outlined">
            {menuState}
          </span>
        </button> */}
        <div
          className="link-container"
          // style={{
          //   display: test ? 'flex' : 'none',
          // }}
        >
          <Link to="/" className="home">Rockets</Link>
          <div className="divider">|</div>
          <Link to="Missions" className="missions">Missions</Link>
          <div className="divider">|</div>
          <Link to="MyProfile" className="myProfile">My Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
