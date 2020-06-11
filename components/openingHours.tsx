import Link from 'next/link';
import React from 'react';
import styles from '@public/css/openingHours.module.css';

const OpeningHours: React.FC = ({ openingHours }: any) => {
    const calculateHours = (hours) =>
        hours.length ? hours.map((hour, key) => <p key={key}>{hour}</p>) : <p className={styles.close}>Closed</p>;

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    <i className={styles.clock}></i>
                    Opening Hours
                </h2>
                {openingHours.map(({ startDay, endDay, hours }, key) => (
                    <div key={key} className={styles.table}>
                        <div className={styles.column}>
                            <h3 className={styles.day}>{endDay ? `${startDay} - ${endDay}` : startDay}</h3>
                        </div>
                        <div className={styles.column}>{calculateHours(hours)}</div>
                    </div>
                ))}
            </div>
            <div className={styles.backBtn}>
                <Link href="/" as={`/`}>
                    <a data-test-id="placeBackButton">Back</a>
                </Link>
            </div>
        </>
    );
};

export default OpeningHours;
