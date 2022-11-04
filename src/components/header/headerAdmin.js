import { Link } from "react-router-dom";
import "./header.css";

const HeaderAdmin = () => { 
    return(
        <header>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="item-link" to="/admin">Administração</Link>
                </li>
                <li className="nav-item">
                    <Link className="item-link" to="/menu">Cardápio</Link>
                </li>
                <li className="nav-item">
                    <Link className="item-link" to="/orders">Pedidos</Link>
                </li>
                <li className="nav-item">
                    <Link className="item-link" to="/kitchen">Cozinha</Link>
                </li>
                <li className="nav-item logout-icon" >
                    icone-logout
                </li>
            </ul>
        </header>
    )
};

export default HeaderAdmin;