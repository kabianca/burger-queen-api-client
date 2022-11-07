// import styles from "./item.module.css";
import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "./item.module.css";

const ItemCar = () => {
    return (
        <>
            <div className={styles.item}>
                <h1 className={styles.text}>Café</h1>
                <div className={styles.quantify}>
                    <AiFillMinusCircle className={styles.minusPlus}/>
                    <h1 className={styles.text}>0</h1>
                    <AiFillPlusCircle className={styles.minusPlus}/>
                </div>
                <h1 className={styles.text}>R$ 7</h1>
                <h1 className={styles.delete}>Excluir</h1>
            </div>
            <hr className={styles.separateItems} />
        </>
    )
}

export default ItemCar;
