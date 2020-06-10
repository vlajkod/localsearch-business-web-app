import React from 'react';
import Head from 'next/head';
const Layout: React.FC = () => (
    <div className="container">
        <Head>
            <title>Localsearch</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <h1 className="title">Welcome to Localsearch</h1>
        </main>
    </div>
);

export default Layout;
