import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="container header-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="logo" style={{ fontSize: '1.7rem', display: 'flex', alignItems: 'center' }}>
                <div className="logo-icon" style={{ fontSize: '2.5rem', marginRight: '0.5rem' }}>ISE</div>
                International Stock Exchange
            </div>
            <nav>
                <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li><Link to="/" style={{ fontSize: '1.2rem' }}>Home</Link></li>
                    <li><Link to="/introduction" style={{ fontSize: '1.2rem' }}>Introduction</Link></li>
                    <li><Link to="/market" style={{ fontSize: '1.2rem' }}>Market</Link></li>
                    <li><Link to="/history" style={{ fontSize: '1.2rem' }}>History</Link></li>
                    <li><Link to="/contact" style={{ fontSize: '1.2rem' }}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;