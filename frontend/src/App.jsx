import React, { useState } from 'react';
import './app.css';
import { FaHome, FaPlus, FaEdit, FaTrash, FaEllipsisV } from 'react-icons/fa';

function App() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <div className="header-bar">  
        <h1>ShipLOGS</h1>
      </div>
      
      <div className={`side-nav ${showNav ? 'show' : ''}`} onClick={toggleNav}>
        <div className="nav-links">
          <a href="#" className="nav-link"><FaHome /></a>
          <a href="#" className="nav-link"><FaPlus /></a>
          <a href="#" className="nav-link"><FaEdit /></a>
          <a href="#" className="nav-link"><FaTrash /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
