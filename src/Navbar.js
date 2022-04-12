import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <li>
        <i class="bi bi-brightness-alt-high"></i>
        <Link to="/welcome">Welcome</Link>
      </li>
      <li>
        <i class="bi bi-dice-6"></i>
        <Link to="/">Board</Link>
      </li>
      <li>
        <i class="bi bi-person-circle"></i>
        <Link to="/repos">Repos</Link>
      </li>
    </div>
  );
}

export default Navbar;