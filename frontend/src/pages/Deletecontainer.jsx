
import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import './Deletecontainer.css'; 

const DeleteContainer = () => {
    const [collection, setCollection] = useState('');
    const [containerId, setContainerId] = useState('');
    const [dataNotFound, setDataNotFound] = useState(false);

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/${collection}/${containerId}`)
            .then(() => {
                alert('Container deleted successfully!');
                setContainerId(''); 
            })
            .catch(error => {
                alert('Error deleting container: ' + error);
                setDataNotFound(true);

                setTimeout(() => {
                    setDataNotFound(false);
                }, 800);
            });
    };

    return (
        <div className="delete-container">
            <h1>Delete Container</h1>
            <select value={collection} onChange={(e) => setCollection(e.target.value)} className="select-collection">
                <option value="">Select a Collection</option>
                <option value="wheat_goodowns">Wheat Goodowns</option>
                <option value="sugar_goodowns">Sugar Goodowns</option>
                <option value="grains_goodowns">Grains Goodowns</option>
                <option value="dry_fruits_goodowns">Dry Fruits Goodowns</option>
            </select>
            <input 
                type="text" 
                value={containerId} 
                onChange={(e) => setContainerId(e.target.value)} 
                placeholder="Enter Container ID" 
                className="container-id-input"
            />
            <button onClick={handleDelete} className="delete-button"><FaTrash /> Delete</button>

            
            {dataNotFound && (
                <p className="data-not-found">Data not found</p>
            )}
        </div>
    );
}

export default DeleteContainer;
