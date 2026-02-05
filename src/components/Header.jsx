import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/programs">Programs</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
