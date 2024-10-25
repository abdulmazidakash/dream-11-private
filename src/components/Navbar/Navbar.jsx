import { RiCoinsFill } from "react-icons/ri";

import PropTypes from 'prop-types';

const Navbar = ({ coins }) => {
  return (
    <nav className="navbar  text-black shadow-lg">
      <div className="flex-1">
	  <img src="https://i.ibb.co/ZHypSky/logo.png" alt="" />
      </div>
      <div className='flex gap-12'>
	  <h2>Home</h2>
 		<h2>Fixtures</h2>
 		<h2>Teams</h2>
 		<h2>Schedules</h2>
	  <div className="flex-none">
        <span className="btn btn-outline mr-2">{coins} Coins <RiCoinsFill className="text-2xl" /></span>
      </div>
	  </div>
    </nav>
  );
};

Navbar.propTypes = {
  coins: PropTypes.number.isRequired,
};

export default Navbar;