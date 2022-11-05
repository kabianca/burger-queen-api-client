import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import styles from "./Header.module.css";

const HeaderService = () => { 
    return(
        <header className={styles.header}>
            <ul className={styles.nav}>
                <li className={styles.item}>
                    <Link className={styles.link} to="/menu">Cardápio</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} to="/orders">Pedidos</Link>
                </li>
                <li className={styles.item}>
                    <RiLogoutBoxRLine />
                </li>
            </ul>
        </header>
    )
};

export default HeaderService;