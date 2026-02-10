import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo/Logo.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo-container">
                    <img src={Logo} alt="The Starry Path" className="logo" />
                </Link>

                {/* Hamburger Toggle */}
                <button
                    className={`nav-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><span className="nav-disabled">Story</span></li>
                        <li><Link to="/programs" onClick={() => setIsMenuOpen(false)}>Programs</Link></li>
                        <li><Link to="/resources" onClick={() => setIsMenuOpen(false)}>Resources</Link></li>
                        <li className="mobile-cta">
                            <button className="btn-join">Book now</button>
                        </li>
                    </ul>
                </nav>

                <div className="cta-container">
                    <button className="btn-join">Book now</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
