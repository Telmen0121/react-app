import React from 'react';

const Features = () => (
    <section className="section" id="features">
        <div className="container">
            <div className="section-title">
                <h2>Үндсэн үйлчилгээ</h2>
            </div>
            <div className="features">
                <div className="feature-card">
                    <div className="feature-icon">$</div>
                    <h3>Хувьцааны арилжаа</h3>
                    <p>Дэлхийн томоохон компаниудын хувьцааг худалдан авах, худалдах боломжтой.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">%</div>
                    <h3>Бондын зах зээл</h3>
                    <p>Засгийн газар болон корпорацийн бондын арилжаанд оролцох, тогтвортой хөрөнгө оруулалт хийх боломж.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">↗</div>
                    <h3>IPO ба ETF</h3>
                    <p>Анхдагч зах зээлийн хувьцаа (IPO) болон олон улсын ETF-д хөрөнгө оруулах боломж.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Features;