import styles from "./ButtonProducts.module.css";

const ButtonProducts = ( {children, onClick} ) => {
    return (
        <section className={styles.card} onClick={onClick} data-id={children}>
            <div className={styles.title}>
                <img src={children.image} alt="Icone do menu" className={styles.image}></img>
                <h1 className={styles.name}>{children.name}</h1>
            </div>
            <p className={styles.price}>R$ {children.price}</p>
        </section>
    )
}

export default ButtonProducts;