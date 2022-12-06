import React from "react";
import styles from "./InputForm.module.css";

const ImputForm = ( props ) => {
    return (
        <input className={styles.inputForm} type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
    )
}

export default ImputForm;