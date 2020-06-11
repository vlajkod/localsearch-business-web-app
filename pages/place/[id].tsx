import React from 'react';
import styles from '@public/css/[id].module.css';

import Layout from '@components/layout';
import OpeningHours from '@components/openingHours';

import httpAdapter from '@utils/httpAdapter';

const Place: React.FC = ({ data }: any) => {
    const { name, address } = data;
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>{name}</h1>
                <p className={styles.address}>
                    <i className={styles.location}></i>
                    {address}
                </p>
                <OpeningHours {...data} />
            </div>
        </Layout>
    );
};

export async function getServerSideProps({ params }) {
    const data = await httpAdapter.get(`api/${params.id}`);
    return {
        props: {
            ...data
        }
    };
}

export default Place;
