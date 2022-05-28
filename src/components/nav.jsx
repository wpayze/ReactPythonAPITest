import logo from '../logo.svg';
import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink to="/" className="navbar-item"><img
                    src={logo}
                    width={112}
                    height={28}
                /></NavLink>
                <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <NavLink to="/" className="navbar-item">Home</NavLink>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <NavLink to="register" className="button is-primary">Sign up</NavLink>
                            <NavLink to="login" className="button is-light">Log in</NavLink>
                            <Link to="logout" className='button is-warning'>Log Out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
