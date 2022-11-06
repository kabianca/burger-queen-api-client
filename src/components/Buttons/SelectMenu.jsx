import styles from "./SelectMenu.module.css";

const SelectMenu = ( {children, onClick, value} ) => {
    return (
        <button type="button" className={styles.btn} onClick={onClick} value={value}>
            {children}
        </button>
    )
}

export default SelectMenu;