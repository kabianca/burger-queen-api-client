import styles from "./ButtonSignin.module.css";

const ButtonSignin = ( {children, onClick} ) => {
    return (
        <button type="button" className={styles.btn} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonSignin;