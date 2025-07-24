# CryptoAcademy RSI Dashboard

A modern RSI Dashboard for crypto traders using FastAPI backend and React frontend.

## Structure

- `backend/`: FastAPI app to serve RSI data
- `frontend/`: React + Vite app to show dashboard

## Run Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Deploy

- Backend: Railway
- Frontend: Vercel (set `VITE_API_BASE_URL` env variable)

## Author

GopalaKrishna (Crypto Academy)
