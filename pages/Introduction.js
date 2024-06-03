import React from 'react';
import styles from './Overall.module.css';

function Introduction() {
    return (
        <div className={styles.introductionContainer}>
            <h1 className={styles.introductionTitle}>Welcome to My Page!</h1>
            <p className={styles.introductionText}>
                Hi, I'm a passionate developer with a love for coding and creating innovative solutions.
                Explore my projects and feel free to reach out if you want to collaborate!
            </p>
        </div>
    );
}

export default Introduction;
