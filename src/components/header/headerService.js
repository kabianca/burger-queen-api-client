import { Link } from "react-router-dom";
import "./header.css";

const HeaderService = () => { 
    return(
        <header>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="menu-link" to="/menu">Cardápio</Link>
                </li>
                <li className="nav-item">
                    <Link className="menu-link" to="/orders">Pedidos</Link>
                </li>
                <li className="nav-item">
                    icone-logout
                </li>
            </ul>
        </header>
    )
};

export default HeaderService;