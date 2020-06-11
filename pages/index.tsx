import React, { useState } from 'react';
import Link from 'next/link';

import Layout from '@components/layout';

import styles from '@public/css/placeList.module.css';

import httpAdapter from '@utils/httpAdapter';

const Home: React.FC = ({ data }: any) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState(data);

    const handleInputChange = ({ target: { value = '' } }) => {
        setSearchValue(value);
        search(value);
    };

    const search = (term: string) => {
        const results = data.filter(({ name }) => name.toLowerCase().includes(term.trim().toLowerCase()));
        setSearchResults(results);
    };

    const clearInput = () => {
        setSearchValue('');
        setSearchResults(data);
    };

    return (
        <Layout>
            <div className={styles.searchContainer}>
                <span className="relative">
                    <input
                        data-test-id="searchInput"
                        type="text"
                        value={searchValue}
                        className={styles.search}
                        onChange={handleInputChange}
                    />
                    {searchValue && <i data-test-id="searchClear" className={styles.searchClear} onClick={clearInput}></i>}
                </span>
            </div>
            {searchResults.map(({ name, reference }) => (
                <Link href="/place/[id]" as={`/place/${reference}`} key={reference}>
                    <h2 data-test-id={reference} className={styles.placeList}>
                        {name}
                    </h2>
                </Link>
            ))}
        </Layout>
    );
};

export async function getStaticProps() {
    const data = await httpAdapter.get('api');
    return {
        props: {
            ...data
        }
    };
}

export default Home;
