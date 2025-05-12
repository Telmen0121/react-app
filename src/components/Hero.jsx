import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
    <section className="hero" id="home">
        <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 'bold' }}>Олон улсын хөрөнгийн биржид тавтай морил!</h1>
            <p style={{ fontWeight: 'bold' }}>
                Дэлхийн санхүүгийн зах зээлийн тухай мэдлэгээ нэмэгдүүлж, хувьцаа, бонд, үнэт цаасны арилжааны боломжуудыг судлаарай.
            </p>
            <Link to="/market" className="btn" style={{ fontWeight: 'bold' }}>Зах зээлийн мэдээлэл</Link>
        </div>
    </section>
);

export default Hero;