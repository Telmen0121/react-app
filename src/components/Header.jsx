import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="container header-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="logo" style={{ fontSize: '1.7rem', display: 'flex', alignItems: 'center' }}>
                <div className="logo-icon" style={{ fontSize: '2.5rem', marginRight: '0.5rem' }}>ISE</div>
                Хөрөнгийн бирж
            </div>
            <nav>
                <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li><Link to="/" style={{ fontSize: '1.2rem' }}>Нүүр</Link></li>
                    <li><Link to="/introduction" style={{ fontSize: '1.2rem' }}>Танилцуулга</Link></li>
                    <li><Link to="/market" style={{ fontSize: '1.2rem' }}>Зах зээл</Link></li>
                    <li><Link to="/history" style={{ fontSize: '1.2rem' }}>Түүх</Link></li>
                    <li><Link to="/contact" style={{ fontSize: '1.2rem' }}>Холбоо барих</Link></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;