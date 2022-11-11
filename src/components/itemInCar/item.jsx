// import styles from "./item.module.css";
import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "./item.module.css";

const ItemCar = ({children, onClick}) => {
    return (
        <section className={styles.item}>
            <img src={children.image} alt="Icone do menu" className={styles.image}></img>
            <h1 className={styles.text}>{children.name}</h1>
            <div className={styles.quantify}>
                <AiFillMinusCircle className={styles.minusPlus}/>
                <h1 className={styles.text}>{children.id}</h1>
                <AiFillPlusCircle className={styles.minusPlus}/>
            </div>
            <h1 className={styles.text}>{children.price}</h1>
            <h1 className={styles.delete} onClick={onClick}>Excluir</h1>
        </section>
    )
}

export default ItemCar;
