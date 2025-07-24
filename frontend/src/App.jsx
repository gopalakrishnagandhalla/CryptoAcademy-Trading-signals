import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [interval, setInterval] = useState("24h");
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);
  const intervals = ["1h", "4h", "12h", "24h"];

  const fetchData = async () => {
    setError(null);
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || "https://cryptoacademy-rsi-api-production.up.railway.app";
      const url = `${apiUrl}/api/rsi?interval=${interval}`;
      console.log("Requesting:", url);
      const res = await axios.get(url);
      setCoins(res.data.data);
      setLastUpdated(res.data.last_updated);
    } catch (err) {
      console.error("Network Error:", err);
      setError("Failed to load data. Please check your connection or try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [interval]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        RSI Dashboard — {interval.toUpperCase()}
      </h1>

      <div className="flex justify-center space-x-4 mb-6">
        {intervals.map((i) => (
          <button
            key={i}
            onClick={() => setInterval(i)}
            className={\`px-4 py-2 rounded \${interval === i ? "bg-green-500" : "bg-gray-700"}\`}
          >
            {i.toUpperCase()}
          </button>
        ))}
      </div>

      {error && <p className="text-center text-red-500 mb-4">{error}</p>}
      {lastUpdated && <p className="text-center text-sm mb-2">Last Updated: {lastUpdated}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coins.map((coin, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg">
            <h2 className="text-lg font-semibold">{coin.symbol}</h2>
            <p className="text-sm">Name: {coin.name}</p>
            <p className="text-sm text-yellow-400">RSI: {coin.rsi?.toFixed(2) || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
