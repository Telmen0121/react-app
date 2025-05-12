import React, { useEffect } from 'react';

const MarketData = () => {
    useEffect(() => {
        function createWidget() {
            if (window.TradingView && document.getElementById('tradingview_12345')) {
                new window.TradingView.widget({
                    width: "100%",
                    height: 400,
                    symbol: "NASDAQ:AAPL", // Use a supported symbol
                    interval: "D",
                    timezone: "Asia/Ulaanbaatar",
                    theme: "light",
                    style: "1",
                    locale: "mn",
                    toolbar_bg: "#f1f3f6",
                    enable_publishing: false,
                    allow_symbol_change: true,
                    container_id: "tradingview_12345"
                });
            }
        }

        // If the script is already loaded, just create the widget
        if (window.TradingView) {
            createWidget();
        } else {
            // If not, load the script and then create the widget
            const script = document.createElement('script');
            script.id = 'tradingview-widget-script';
            script.src = 'https://s3.tradingview.com/tv.js';
            script.async = true;
            script.onload = createWidget;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section className="section market-data" id="market">
            <div className="container">
                <div className="section-title">
                    <h2>Зах зээлийн мэдээлэл</h2>
                </div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Индекс/Хувьцаа</th>
                            <th>Ханш</th>
                            <th>Өөрчлөлт</th>
                            <th>Өөрчлөлт (%)</th>
                            <th>Арилжааны дүн (₮)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Apple Inc. (AAPL)</td>
                            <td>192.35</td>
                            <td className="positive">+1.25</td>
                            <td className="positive">+0.65%</td>
                            <td>$89.2B</td>
                        </tr>
                        <tr>
                            <td>Microsoft Corp. (MSFT)</td>
                            <td>415.12</td>
                            <td className="positive">+2.10</td>
                            <td className="positive">+0.51%</td>
                            <td>$56.7B</td>
                        </tr>
                        <tr>
                            <td>Alphabet Inc. (GOOGL)</td>
                            <td>172.88</td>
                            <td className="negative">-0.45</td>
                            <td className="negative">-0.26%</td>
                            <td>$34.5B</td>
                        </tr>
                        <tr>
                            <td>Amazon.com Inc. (AMZN)</td>
                            <td>183.25</td>
                            <td className="positive">+0.95</td>
                            <td className="positive">+0.52%</td>
                            <td>$48.1B</td>
                        </tr>
                        <tr>
                            <td>Tesla Inc. (TSLA)</td>
                            <td>172.62</td>
                            <td className="negative">-2.18</td>
                            <td className="negative">-1.25%</td>
                            <td>$22.3B</td>
                        </tr>
                        <tr>
                            <td>NVIDIA Corp. (NVDA)</td>
                            <td>1,150.34</td>
                            <td className="positive">+10.22</td>
                            <td className="positive">+0.90%</td>
                            <td>$39.8B</td>
                        </tr>
                    </tbody>
                </table>
                {/* TradingView Widget BELOW the table */}
                <div className="tradingview-widget-container" style={{ margin: '2rem 0' }}>
                    <div id="tradingview_12345" style={{ height: 400 }} />
                </div>
            </div>
        </section>
    );
};

export default MarketData;