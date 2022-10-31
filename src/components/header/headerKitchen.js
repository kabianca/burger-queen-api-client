import { Link } from "react-router-dom";
import "./header.css";

const HeaderKitchen = () => { 
    return(
            <header>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="menu-link" to="/kitchen">Cozinha</Link>
                    </li>
                    <li className="nav-item">
                        icone-logout
                    </li>
                </ul>
            </header>
    )
};

export default HeaderKitchen;