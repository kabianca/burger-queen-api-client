import styles from "./Buttons.module.css";

export const ButtonProducts = ( {children, onClick} ) => {
    return (
        <button className={styles.card} onClick={onClick} data-id={children.id}>
            <figure className={styles.title}>
                <img src={children.image} alt="Icone do menu" className={styles.image}></img>
                <figcaption className={styles.name}>{children.name}</figcaption>
            </figure>
            <p className={styles.price}>R$ {children.price}</p>
        </button>
    )
};