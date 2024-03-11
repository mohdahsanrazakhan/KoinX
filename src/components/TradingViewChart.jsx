import React, { useEffect, useRef, memo } from 'react';

function TradingViewChart() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BITSTAMP:BTCUSD",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "2",
        "locale": "en",
        "enable_publishing": false,
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "gridColor": "rgba(12, 52, 61, 0.06)",
        "hide_top_toolbar": true,
        "range": "5D",
        "allow_symbol_change": true,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "5px", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewChart);
