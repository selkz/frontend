import { Link } from "react-router-dom";

function NavbarComponent() {
    const handleBurgerMenu = (evt) => {
        const target = evt.currentTarget.dataset.target;
        const $target = document.getElementById(target);

        evt.currentTarget.classList.toggle("is-active");
        $target.classList.toggle("is-active");
    };

    return (
        <nav className="navbar container" role="navigation" aria-label="main navigation">
            {/* Navbar Brand */}
            <div className="navbar-brand">
                <Link className="navbar-item is-size-5 has-text-black has-text-weight-medium" to="/">
                    Selkz
                </Link>

                <button
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navMenu"
                    onClick={handleBurgerMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            {/* Navbar Brand */}

            {/* Navbar Menu */}
            <div className="navbar-menu" id="navMenu">
                {/* Navbar Start */}
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="/explore">Explore</Link>
                {/* Navbar Start */}

                {/* Navbar End */}
                <div className="navbar-end">
                    <Link className="navbar-item" to="/login">Login</Link>

                    <div className="navbar-item">
                        <Link className="button is-dark" to="/">Write</Link>
                    </div>
                </div>
                {/* Navbar End */}
            </div>
            {/* Navbar Menu */}
        </nav>
    )
}

export default NavbarComponent;