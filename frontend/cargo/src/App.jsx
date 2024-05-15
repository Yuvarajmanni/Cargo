import React, { useState } from 'react';
import './app.css';
import { FaHome, FaPlus, FaEdit, FaTrash, FaEllipsisV } from 'react-icons/fa';

function pp() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <div className="header-bar">  
        <h1>CARGO</h1>
      </div>
      <button className="dropdown-btn" onClick={toggleNav}>
        <FaEllipsisV />
      </button>
      <div className={`side-nav ${showNav ? 'show' : ''}`} onClick={toggleNav}>
        <div className="nav-links">
          <a href="#" className="nav-link"><FaHome /> Home</a>
          <a href="#" className="nav-link"><FaPlus /> Add Container</a>
          <a href="#" className="nav-link"><FaEdit /> Update Container</a>
          <a href="#" className="nav-link"><FaTrash /> Delete Container</a>
        </div>
      </div>
    </div>
  );
}

export default app;
