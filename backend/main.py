from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

@app.get("/api/rsi")
def get_rsi(interval: str = Query(...)):
    # Example mock data
    return {
        "data": [
            {"symbol": "BTC", "name": "Bitcoin", "rsi": 31.45},
            {"symbol": "ETH", "name": "Ethereum", "rsi": 55.10}
        ],
        "last_updated": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
    }
