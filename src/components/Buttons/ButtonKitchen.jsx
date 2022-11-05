import styles from "./ButtonKitchen.module.css";

const ButtonKitchen = ( {onClick} ) => {
    return (
        <button type="button" className={styles.btn} onClick={onClick}>
            Enviar para cozinha
        </button>
    )
}

export default ButtonKitchen;
