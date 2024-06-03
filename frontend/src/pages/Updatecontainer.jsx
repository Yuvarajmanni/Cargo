import React, { useState } from 'react';
import axios from 'axios';
import './Updatecontainer.css'; 

function Home() {
    const [selectedOption, setSelectedOption] = useState('');
    const [inputId, setInputId] = useState('');
    const [container, setContainer] = useState(null);
    const [updatedContainer, setUpdatedContainer] = useState({
        containerId: '',
        from: '',
        importedBy: '',
        goods: '',
        date: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSelect = (event) => {
        setSelectedOption(event.target.value);
        setInputId('');
        setContainer(null);
        setUpdatedContainer({
            containerId: '',
            from: '',
            importedBy: '',
            goods: '',
            date: ''
        });
        setError('');
    };

    const handleInputChange = (event) => {
        setInputId(event.target.value);
    };

    const handleGetContainer = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`http://localhost:3000/${selectedOption}/${inputId}`);
            if (res.data) {
                setContainer(res.data);
                setUpdatedContainer(res.data);
                setError('');
            } else {
                setError('Container not found');
                setTimeout(() => setError(''), 2000); 
            }
        } catch (error) {
            setError('Error fetching container data');
            console.error('Error fetching container data:', error);
            setTimeout(() => setError(''), 1000); 
        }
        setLoading(false);
    };

    const handleUpdateContainer = async () => {
        try {
            await axios.put(`http://localhost:3000/${selectedOption}/${inputId}`, updatedContainer);
            setInputId('');
            setContainer(null);
            setUpdatedContainer({
                containerId: '',
                from: '',
                importedBy: '',
                goods: '',
                date: ''
            });
            setError('');
            alert('Container updated successfully');
        } catch (error) {
            setError('Error updating container');
            console.error('Error updating container:', error);
            setTimeout(() => setError(''), 2000); 
        }
    };

    const handleUpdatedContainerChange = (event) => {
        const { name, value } = event.target;
        setUpdatedContainer((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="home-container">
            <select value={selectedOption} onChange={handleSelect} className="dropdown">
                <option value="">Select an option</option>
                <option value="dry_fruits_goodowns">Dry fruits</option>
                <option value="grains_goodowns">Grains</option>
                <option value="sugar_goodowns">Sugar</option>
                <option value="wheat_goodowns">Wheat</option>
            </select>

            <input 
                type="text" 
                value={inputId} 
                onChange={handleInputChange} 
                placeholder="Search by Container ID" 
                className="input-id"
            />

            <button onClick={handleGetContainer} className="search-button">
                {loading ? 'Loading...' : 'Search'}
            </button>

            {container && (
                <div className="edit-container">
                    <h2>Edit Container</h2>
                    <input 
                        type="text" 
                        name="from"
                        value={updatedContainer.from} 
                        onChange={handleUpdatedContainerChange} 
                        placeholder="From" 
                        className="input-field"
                    />
                    <input 
                        type="text" 
                        name="importedBy"
                        value={updatedContainer.importedBy} 
                        onChange={handleUpdatedContainerChange} 
                        placeholder="Imported By" 
                        className="input-field"
                    />
                    <input 
                        type="text" 
                        name="goods"
                        value={updatedContainer.goods} 
                        onChange={handleUpdatedContainerChange} 
                        placeholder="Goods" 
                        className="input-field"
                    />
                    <input 
                        type="date" 
                        name="date"
                        value={updatedContainer.date} 
                        onChange={handleUpdatedContainerChange} 
                        className="input-field"
                    />
                    <button onClick={handleUpdateContainer} className="update-button">Update</button>
                </div>
            )}

            {error && <p className="error-message">Container not found</p>}
        </div>
    );
}

export default Home;
