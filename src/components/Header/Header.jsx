import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { getToken, removeToken } from '../../api/api';
import styles from './Header.module.css';

export const HeaderAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    if (!getToken()) {
      navigate('/');
    }
  };

  return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav}>
                    <div className={styles.links}>
                        <li className={styles.item}>
                            <NavLink
                                className={styles.link}
                                style={({ isActive }) => ({ color: isActive ? '#EBCE39' : '#FFF' })}
                                to="/admin">
                                    Administração
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink
                                className={styles.link}
                                style={({ isActive }) => ({ color: isActive ? '#EBCE39' : '#FFF' })}
                                to="/menu">
                                    Cardápio
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink
                                className={styles.link}
                                style={({ isActive }) => ({ color: isActive ? '#EBCE39' : '#FFF' })}
                                to="/orders">
                                    Pedidos
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink
                                className={styles.link}
                                style={({ isActive }) => ({ color: isActive ? '#EBCE39' : '#FFF' })}
                                to="/kitchen">
                                    Cozinha
                            </NavLink>
                        </li>
                    </div>
                    <li className={styles.item} onClick={handleLogout}>
                        <RiLogoutBoxRLine />
                    </li>
                </ul>
            </nav>
        </header>
  );
};

export const HeaderKitchen = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    if (!getToken()) {
      navigate('/');
    }
  };
  return (
            <header className={styles.header}>
                <nav>
                    <ul className={styles.nav}>
                        <div className={styles.links}>
                            <li className={styles.item}>
                                <NavLink
                                    className={styles.link}
                                    style={({ isActive }) => ({ color: isActive ? '#EBCE39' : '#FFF' })}
                                    to="/kitchen">
                                        Cozinha
                                </NavLink>
                            </li>
                        </div>
                        <li className={styles.item} onClick={handleLogout}>
                            <RiLogoutBoxRLine />
                        </li>
                    </ul>
                </nav>
            </header>
  );
};

export const HeaderService = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    if (!getToken()) {
      navigate('/');
    }
  };
  return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav}>
                    <div className={styles.links}>
                        <li className={styles.item}>
                            <NavLink
                                className={styles.link}
                                style={({ isActive }) => ({ color: isActive ? '#EBCE39' : '#FFF' })}
                                to="/menu">
                                    Cardápio
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink
                                className={styles.link}
                                style={({ isActive }) => ({ color: isActive ? '#EBCE39' : '#FFF' })}
                                to="/orders">
                                    Pedidos
                            </NavLink>
                        </li>
                    </div>
                    <li className={styles.item} onClick={handleLogout} >
                        <RiLogoutBoxRLine/>
                    </li>
                </ul>
            </nav>
        </header>
  );
};
