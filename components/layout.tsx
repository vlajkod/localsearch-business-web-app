import React from 'react';
import Head from 'next/head';

import styles from '@public/css/layout.module.css';

const Layout: React.FC = ({ children }) => (
    <div className={styles.container}>
        <Head>
            <title>Localsearch</title>
            <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <main className={styles.boxContainer}>
            <div className={styles.banner}></div>
            {children}
        </main>
    </div>
);

export default Layout;
