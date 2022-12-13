import React from 'react';
import styles from './InputForm.module.css';

const ImputForm = (props) => (
    <input
        className={styles.inputForm}
        {...props}
    >
    </input>
);

export default ImputForm;
