import styles from "./Buttons.module.css";
import ovo from "../../assets/ovo.png";
import queijo from "../../assets/queijo.png";
import nullComplement from "../../assets/null.png";

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

export const ButtonComplements = ( {children, onClick} ) => {
    const foto = children.complement === "ovo" ? ovo : queijo
    return (
        <section className={styles.card} onClick={onClick} data-id={children.id}>
            <div className={styles.title}>
                <img src={children.complement ? foto : nullComplement}alt="Icone do menu" className={styles.image}></img>
                <h1 className={styles.name}>{children.complement ? "Adicionar " + children.complement : "Sem adicional"}</h1>
            </div>
            <p className={styles.price}>{children.complement ? "R$ 1" : ""}</p>
        </section>
    )
};


