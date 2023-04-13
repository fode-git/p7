import { Link } from "react-router-dom";
import logo from '../assets/img/LOGOT.svg';
import '../style/components/header.css'

export default function Header() {

return (
    <div className="blocheader">
        <div className="header">
            <img src={logo} alt="" />
            <nav >
                <Link className="linkaccueil" to="/">Accueil</Link>
                <Link className="linkapropos" to="/A-propos"> A propos</Link>
            </nav>
        </div>
    </div>    
    )
};