import { Link } from "react-router-dom";
import "./header.css";

const HeaderKitchen = () => { 
    return(
            <header>
                <ul className="nav">
                    <li className="nav-item active">
                        <Link className="item-link active" to="/kitchen">Cozinha</Link>
                    </li>
                    <li className="nav-item logout-icon">
                        icone-logout
                    </li>
                </ul>
            </header>
    )
};

export default HeaderKitchen;