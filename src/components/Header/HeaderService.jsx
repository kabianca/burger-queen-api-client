import React from "react";
import { NavLink } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import styles from "./Header.module.css";

const HeaderService = () => { 
    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.item}>
                        <NavLink
                            className={styles.link}
                            style={({ isActive }) => ({color: isActive ? '#EBCE39' : '#FFF'})}
                            to="/menu">
                                Cardápio
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink
                            className={styles.link}
                            style={({ isActive }) => ({color: isActive ? '#EBCE39' : '#FFF'})}
                            to="/orders">
                                Pedidos
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <RiLogoutBoxRLine />
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default HeaderService;