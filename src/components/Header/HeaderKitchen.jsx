import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import styles from "./Header.module.css";

const HeaderKitchen = () => { 
    return(
            <header className={styles.header}>
                <ul className={styles.nav}>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/kitchen">Cozinha</Link>
                    </li>
                    <li className={styles.item}>
                        <RiLogoutBoxRLine />
                    </li>
                </ul>
            </header>
    )
};

export default HeaderKitchen;