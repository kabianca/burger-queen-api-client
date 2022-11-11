import React from "react";
import { NavLink } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import styles from "./Header.module.css";

export const HeaderAdmin = () => { 

    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav}>
                    <div className={styles.links}>
                        <li className={styles.item}>
                            <NavLink
                                className={styles.link}
                                style={({ isActive }) => ({color: isActive ? '#EBCE39' : '#FFF'})}
                                to="/admin">
                                    Administração
                            </NavLink>
                        </li>
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
                            <NavLink
                                className={styles.link}
                                style={({ isActive }) => ({color: isActive ? '#EBCE39' : '#FFF'})}
                                to="/kitchen">
                                    Cozinha
                            </NavLink>
                        </li>
                    </div>
                    <li className={styles.item}>
                        <RiLogoutBoxRLine />
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export const HeaderKitchen = () => { 
    return(
            <header className={styles.header}>
                <nav>
                    <ul className={styles.nav}>
                        <div className={styles.links}>
                            <li className={styles.item}>
                                <NavLink
                                    className={styles.link}
                                    style={({ isActive }) => ({color: isActive ? '#EBCE39' : '#FFF'})}
                                    to="/kitchen">
                                        Cozinha
                                </NavLink>
                            </li>
                        </div>
                        <li className={styles.item}>
                            <RiLogoutBoxRLine />
                        </li>
                    </ul>
                </nav>
            </header>
    )
};

export const HeaderService = () => { 
    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav}>
                    <div className={styles.links}>
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
                    </div>
                    <li className={styles.item} >
                        <RiLogoutBoxRLine/>
                    </li>
                </ul>
            </nav>
        </header>
    )
};