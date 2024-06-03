
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> 
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FontAwesomeIcon icon={faPlus} /> 
          </Link>
        </li>
        <li>
          <Link to="/delete">
            <FontAwesomeIcon icon={faTrash} /> 
          </Link>
        </li>
        <li>
          <Link to="/update">
            <FontAwesomeIcon icon={faEdit} /> 
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
