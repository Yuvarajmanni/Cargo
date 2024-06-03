import React, { useState } from 'react';
import axios from 'axios';
import './Addcontainer.css'; 

const AddContainer = () => {
  const [container, setContainer] = useState({
    containerId: '', from: '', importedBy: '', goods: '', date: ''
  });

  const [selectedOption, setSelectedOption] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setContainer({ ...container, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/${selectedOption}`, container)
      .then(() => {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          setContainer({
            containerId: '', from: '', importedBy: '', goods: '', date: ''
          });
          setSelectedOption('');
        }, 2000);
      })
      .catch(error => alert('Error adding container: ' + error));
  };

  return (
    <div className="add-container">
      <h1>Add New Container</h1>
      <select value={selectedOption} onChange={handleSelect} className="select-collection">
        <option value="">Select a Collection</option>
        <option value="dry_fruits_goodowns">Dry fruits</option>
        <option value="grains_goodowns">Grains</option>
        <option value="sugar_goodowns">Sugar</option>
        <option value="wheat_goodowns">Wheat</option>
      </select>
      <form onSubmit={handleSubmit} className="container-form">
        <input type="text" name="containerId" value={container.containerId} onChange={handleChange} placeholder="Container ID" required />
        <input type="text" name="from" value={container.from} onChange={handleChange} placeholder="From" required />
        <input type="text" name="importedBy" value={container.importedBy} onChange={handleChange} placeholder="Imported By" required />
        <input type="text" name="goods" value={container.goods} onChange={handleChange} placeholder="Goods" required />
        <input type="date" name="date" value={container.date} onChange={handleChange} required />
        <button type="submit" className="add-button">Add Container</button>
      </form>
      {showMessage && <p className="success-message">Container added successfully!</p>}
    </div>
  );
}

export default AddContainer;
