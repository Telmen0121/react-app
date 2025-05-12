import React from 'react';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-widget">
                    <h3>Олон улсын хөрөнгийн бирж</h3>
                    <p>Дэлхийн хөрөнгө оруулалтын мэдлэг, ил тод байдал, санхүүгийн боловсролыг дэмжигч платформ.</p>
                </div>
                <div><h3>Мэдээллийн системийн үндэс ISM-221</h3>
                    <h3>Бие даалт 2</h3></div>
            </div>

        </div>
        <style jsx>{`
            footer,
            footer .footer-content,
            footer .footer-widget,
            footer h3,
            footer p {
              color: #fff !important;
            }
        `}</style>
    </footer>
);

export default Footer;