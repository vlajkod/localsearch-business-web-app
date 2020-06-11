import React, { useState } from 'react';
import styles from '@public/css/placeList.module.css';

const PlaceList: React.FC = ({ places }: any) => {
    const [searchResults, setSearchResults] = useState(places);

    const handleInputChange = ({ target: { value = '' } }) => {
        const inputValue = value.toLowerCase().trim();
        const results = places.filter(({ name }) => name.toLowerCase().includes(inputValue));
        setSearchResults(results);
    };

    return (
        <>
            <div className={styles.searchContainer}>
                <input type="text" className={styles.search} onChange={handleInputChange} />
            </div>
            {searchResults.map(({ name, reference }) => (
                <div key={reference} className={styles.placeList}>
                    <h2>{name}</h2>
                </div>
            ))}
        </>
    );
};

export default PlaceList;
