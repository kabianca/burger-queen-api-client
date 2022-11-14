import styles from "./Buttons.module.css";

export const ButtonKitchen = ( {onClick} ) => {
    return (
        <button type="button" className={styles.btn_kitchen} onClick={onClick}>
            Enviar para cozinha
        </button>
    )
};

export const ButtonSignin = ( {children, onClick} ) => {
    return (
        <button type="button" className={styles.btn_signin} onClick={onClick}>
            {children}
        </button>
    )
};

export const SelectMenu = ( {children, onClick, className, value} ) => {
    return (
        <button type="button" className={className} onClick={onClick} value={value}>
            {children}
        </button>
    )
};

export const ButtonProducts = ( {children, onClick} ) => {
    return (
        <section className={styles.card} onClick={onClick} data-id={children.id}>
            <div className={styles.title}>
                <img src={children.image} alt="Icone do menu" className={styles.image}></img>
                <h1 className={styles.name}>{children.name}</h1>
            </div>
            <p className={styles.price}>R$ {children.price}</p>
        </section>
    )
};


