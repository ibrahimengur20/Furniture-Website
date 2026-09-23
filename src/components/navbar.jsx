import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="Navbar-communucation">
                <span>☎ +90 xxx xxx xx xx</span>
                <span>✉ info@lume.com</span>
            </div>

            <nav className="Navbar-nav">

                <div className="navbar-img">
                    <Link className="brand" to="/">
                         LUME
                        <span>HOME</span>
                    </Link>
                </div>

                <Link to="/products">Ürünler</Link>
                <Link to="/about">Hakkımızda</Link>
                <Link to="/communication">İletişim</Link>

            </nav>
        </>
    );
}

export default Navbar;