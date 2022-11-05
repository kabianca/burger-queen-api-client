import { Link } from "react-router-dom";
import "./Header.css";

const HeaderService = () => { 
    return(
        <header>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="item-link active" to="/menu">Cardápio</Link>
                </li>
                <li className="nav-item">
                    <Link className="item-link" to="/orders">Pedidos</Link>
                </li>
                <li className="nav-item logout-icon">
                    icone-logout
                </li>
            </ul>
        </header>
    )
};

export default HeaderService;