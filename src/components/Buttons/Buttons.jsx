import styles from "./Buttons.module.css";
import ovo from "../../assets/ovo.png";
import queijo from "../../assets/queijo.png";
import nullComplement from "../../assets/null.png";

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

export const ButtonComplements = ( {children, onClick} ) => {
    const foto = children.complement === "ovo" ? ovo : queijo
    return (
        <button className={styles.card} onClick={onClick} data-id={children.id}>
            <figure className={styles.title}>
                <img src={children.complement ? foto : nullComplement}alt="Icone do menu" className={styles.image}></img>
                <figcaption className={styles.name}>{children.complement ? "Adicionar " + children.complement : "Sem adicional"}</figcaption>
            </figure>
            <p className={styles.price}>{children.complement ? "R$ 1" : ""}</p>
        </button>
    )
};


