import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; 

function Home() {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    const [container, setContainer] = useState([]);

    useEffect(() => {
        async function getContainer() {
            if (selectedOption) {
                try {
                    const res = await axios.get(`http://localhost:3000/${selectedOption}`);
                    setContainer(res.data);
                } catch (error) {
                    console.error('Error fetching container data:', error);
                }
            }
        }
        getContainer();
    }, [selectedOption]);

    return (
        <div className="container-table-container">
            <select value={selectedOption} onChange={handleSelect} className="container-dropdown">
                <option value="">Select an option</option>
                <option value="dry_fruits_goodowns">Dry fruits</option>
                <option value="grains_goodowns">Grains</option>
                <option value="sugar_goodowns">Sugar</option>
                <option value="wheat_goodowns">Wheat</option>
            </select>

            <table className="container-table">
                <thead>
                    <tr>
                        <th>Container ID</th>
                        <th>From</th>
                        <th>Imported By</th>
                        <th>Goods</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {container.length > 0 ? (
                        container.map(container => (
                            <tr key={container._id}>
                                <td>{container.containerId}</td>
                                <td>{container.from}</td>
                                <td>{container.importedBy}</td>
                                <td>{container.goods}</td>
                                <td>{new Date(container.date).toLocaleDateString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="container-no-data">Goodown is Empty</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
